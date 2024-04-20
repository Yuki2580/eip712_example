import { ethers } from "hardhat";
import { expect } from "chai";
import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';

async function deployEip712Fixture() {
  const [owner, signer1, signer2] = await ethers.getSigners();
  const hardhatTokenFactory = await ethers.getContractFactory("Eip712");
  const Eip712 = await hardhatTokenFactory.deploy(owner.address);

  return { Eip712, owner, signer1, signer2 };
}

describe("Eip712 contract", function () {
  it("check eip712 signiture verification for calling a mint function", async function () {

    const { Eip712, owner, signer1 } = await loadFixture(deployEip712Fixture);

    // テスト用の署名を作成するための準備
    const tokenId = 1;
    const fid = 123;
    const to = signer1.address;

    // domainを定義
    const domain = {
      name: 'Eip712 Test',
      version: '2',
      chainId: 31337n, //hardhatデフォルトのchainId
      verifyingContract: Eip712.target,
    };

    // eip712Domainでドメインを取得できる
    console.log(await Eip712.eip712Domain());
  
    // 署名するメッセージの型定義、今回MINT関数
    const types = {
      Mint: [
        { name: 'to', type: 'address' },
        { name: 'tokenId', type: 'uint256' },
        { name: 'fid', type: 'uint256' },
      ],
    };
  
    // 署名するメッセージのデータ
    const message = {
      to: to,
      tokenId: tokenId,
      fid: fid,
    };
  
    // 署名の生成
    const sig = await owner.signTypedData(domain, types, message);

    // mint関数を呼び出す
    expect(await Eip712.mint(to, tokenId, fid, sig))
      .to.emit(Eip712, "mint")
      .withArgs(to, tokenId, fid); // Mintイベントが期待通りに発火するか検証

    // トークンが正しくミントされたか検証
    expect(await Eip712.balanceOf(to, tokenId)).to.equal(1);
  });
});