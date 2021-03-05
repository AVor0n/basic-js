const CustomError = require("../extensions/custom-error");
module.exports = function countCats(backyard) {
  return backyard.join(',').split(',').filter(e => e == '^^').length;
};