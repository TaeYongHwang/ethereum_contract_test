// const Migrations = artifacts.require("Migrations");
const TxTest = artifacts.require("TxTest");

module.exports = function (deployer) {
  deployer.deploy(TxTest, 1000000000);
};
