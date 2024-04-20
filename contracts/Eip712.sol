// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.23;

import "@openzeppelin/contracts/utils/cryptography/SignatureChecker.sol";
import "@openzeppelin/contracts/utils/cryptography/EIP712.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";

contract Eip712 is Ownable, ERC1155Supply, EIP712 {
    /*//////////////////////////////////////////////////////////////
                                 ERRORS
    //////////////////////////////////////////////////////////////*/
    /// @notice Token has already been claimed for this fid
    error AlreadyMinted();

    /// @notice Caller provided invalid `Mint` signature
    error InvalidSignature();

    /*//////////////////////////////////////////////////////////////
                                STORAGE
    //////////////////////////////////////////////////////////////*/
    uint256 public currentTokenId = 0;

     /// @notice Address authorized to sign `Mint` messages
    address public signer;

    /// @notice Mapping tracking fids that have minted
    mapping(uint256 fid => bool) public hasMinted;

    /// @notice EIP-712 typehash for `Mint` message
    bytes32 public constant MINT_TYPEHASH =
        keccak256("Mint(address to,uint256 tokenId,uint256 fid)");

    /*//////////////////////////////////////////////////////////////
                                 EVENTS
    //////////////////////////////////////////////////////////////*/
    event Mint(address indexed to, uint256 indexed tokenId, uint256 indexed fid);


    /*//////////////////////////////////////////////////////////////
                              CONSTRUCTOR
    //////////////////////////////////////////////////////////////*/
    constructor(
        address ownerAddress_
    ) Ownable(ownerAddress_) ERC1155("") EIP712("Eip712 Test", "1") {
        signer = ownerAddress_;
    }
    
    /*//////////////////////////////////////////////////////////////
                            EXTERNAL UPDATE
    //////////////////////////////////////////////////////////////*/
    function mint(
        address to,
        uint256 tokenId,
        uint256 fid,
        bytes calldata sig
    ) external {
        if (!_verifySignature(to, tokenId, fid, sig)) {
            revert InvalidSignature();
        }
        if (hasMinted[fid]) {
            revert AlreadyMinted();
        }

        hasMinted[fid] = true;
        emit Mint(to, tokenId, fid);
        ++currentTokenId;
        _mint(to, currentTokenId,1,"");
    }

    /*//////////////////////////////////////////////////////////////
                            INTERNAL UPDATE
    //////////////////////////////////////////////////////////////*/
    /// @dev EIP-712 domain name and contract version.
    function _domainNameAndVersion()
        internal
        pure
        returns (string memory, string memory)
    {
        return ("Eip712 Test", "1");
    }


    /// @dev Verify EIP-712 `Mint` signature.
    function _verifySignature(
        address to,
        uint256 tokenId,
        uint256 fid,
        bytes calldata sig
    ) internal view returns (bool) {
        bytes32 digest =
            _hashTypedDataV4(keccak256(abi.encode(MINT_TYPEHASH, to, tokenId, fid)));
        return
            SignatureChecker.isValidSignatureNow(signer, digest, sig);
    }

    receive() external payable {}
}
