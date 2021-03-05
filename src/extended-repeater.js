const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  options.separator = options.separator || '+';
  options.additionSeparator = options.additionSeparator || '|';
  options.addition = options.addition === null ? 'null' :
                     options.addition === false ? 'false' :
                     options.addition;

  const add_str = new Array(options.additionRepeatTimes).
    fill(options.addition).
    join(options.additionSeparator);

  return new Array(options.repeatTimes).
    fill(str + add_str).
    join(options.separator);
};