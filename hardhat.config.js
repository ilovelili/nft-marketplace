require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
	const accounts = await ethers.getSigners();

	for (const account of accounts) {
		console.log(account.address);
	}
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
	solidity: "0.8.3",
	paths: {
		artifacts: "./artifacts",
	},
	networks: {
		hardhat: {
			chainId: 1337,
		},
		ropsten: {
			url: `https://eth-ropsten.alchemyapi.io/v2/7yjf-MSjSZCcJrMFuBzRRuV-6jWxseqz`,
			accounts: [`0xbfa655126938af76192473971d418b82c00f080401ac7d6a8f3cce0323f93be7`],
		},
	},
};
