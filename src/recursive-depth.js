const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth = (arr) => Array.isArray(arr) ? 1 + Math.max(0, ...arr.map(this.calculateDepth)) : 0;
};