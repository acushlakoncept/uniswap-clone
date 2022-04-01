require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    // rinkeby: {
    //   url: "https://eth-rinkeby.alchemyapi.io/v2/mE",
    //   accounts: [
    //     '528770f9ad102544d8e5832bf51adae4d2993749a913dc518e155a40a0490679'
    //   ],
    // },
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/K88PutR5ZxDngxxqx6W9r8vYwShOTLtj",
      accounts: [
        '528770f9ad102544d8e5832bf51adae4d2993749a913dc518e155a40a0490679'
      ],
      gas: 5500000,  // Gas limit, how much gas we are willing to spent
      gasPrice: 20000000000, // Gas price, how much we are willing to pay for unit of gas
      confirmations: 2, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
    }
  }
};
