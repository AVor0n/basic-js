const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error;
  }

  let res = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--double-next': {
        if (i + 1 < arr.length) {
          res.push(arr[i + 1]);
        }
        break;
      }
      case '--double-prev': {
        if (res.length > 0) {
          res.push(arr[i - 1]);
        }
        break;
      }
      case '--discard-next': {
        if (arr[i + 2] == '--double-prev' || arr[i + 2] == '--discard-prev') {
          i++;
        }
        i++;
        break;
      }
      case '--discard-prev': {
        if (res.length > 0) {
          res.pop();
        }
        break;
      }
      default: {
        res.push(arr[i]);
      }
    }
  }
  return res;
};