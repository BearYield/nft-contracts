const { network } = require('hardhat');

async function main() {

  const [deployer] = await ethers.getSigners();

  console.log(
    `Deploying the contracts to ${network.name} from `,
    await deployer.getAddress()
  );

  const DeployContract = await ethers.getContractFactory("YieldingNFTV1");

  deployedContract = await DeployContract.deploy("Bear Yield: Genesis", "BYG", deployer.getAddress(), "https://bearyield.com/metadata/unrevealed.json", ethers.utils.parseUnits("1").toString(), 100);

  deployedReceipt = await deployedContract.deployed();

  console.log(`deployed YieldingNFT, address is ${deployedContract.address}, tx ${deployedContract.deployTransaction.hash}`);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
