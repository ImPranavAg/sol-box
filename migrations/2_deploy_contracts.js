// eslint-disable-next-line no-undef
const Solbox = artifacts.require("Solbox");

module.exports = function(deployer) {
  deployer.deploy(Solbox);
};
