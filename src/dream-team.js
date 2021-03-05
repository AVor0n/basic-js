const CustomError = require("../extensions/custom-error");

const isString = (str) => (typeof str === 'string');

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  return members.filter(str => isString(str))
    .map(str => str.trimLeft()[0].toUpperCase())
    .sort().join('');
}