const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const K = 0.693 / HALF_LIFE_PERIOD;
const isAdequateValue = (value) => (0 < value && value < MODERN_ACTIVITY);
const isString = (str) => (typeof str === 'string');

module.exports = function dateSample(str = 0) {
  const activity = parseFloat(str);

  if (!isString(str)) return false;
  if (isNaN(activity)) return false;
  if (!isAdequateValue(activity)) return false;

  return Math.ceil(Math.log(MODERN_ACTIVITY / activity) / K);
};