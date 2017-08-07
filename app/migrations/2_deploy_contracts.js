// var ConvertLib = artifacts.require("./ConvertLib.sol");
// var MetaCoin = artifacts.require("./MetaCoin.sol");

// var Basic = artifacts.require("./Basic.sol");
var HelloWorld = artifacts.require("./HelloWorld.sol");
var People = artifacts.require("./People.sol");
var Store = artifacts.require("./Store.sol");



module.exports = function(deployer) {
  // deployer.deploy(ConvertLib);
  // deployer.link(ConvertLib, MetaCoin);
  // deployer.deploy(MetaCoin);
  // deployer.deploy(Basic);
  deployer.deploy(HelloWorld);
  deployer.deploy(People);
  deployer.deploy(Store);

};
