const basicMathOperations = artifacts.require("basicMathOperations");

module.exports = function (deployer) {
  deployer.deploy(basicMathOperations);
};
