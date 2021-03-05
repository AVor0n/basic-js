const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {


  reverse = false;

  constructor(isDirect) {
    if (isDirect == false)
      this.reverse = true;
  }

  encrypt(message, key) {
    const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (message == undefined || key == undefined) throw new Error;
    message = message.toUpperCase();
    key = key.toUpperCase();
    let code = ''; let j = 0;

    for (let i = 0; i < message.length; i++) {
      if (message[i].match(/[A-Z]/)) {
        let mi = abc.indexOf(message[i]); //алфавитный индекс i-ой буквы сообщения
        let ki_c = key[(j >= key.length) ? (j % key.length) : j]; //если ключ короткий, повторяем его до длины сообщения
        let ki = abc.indexOf(ki_c); //алфавитный индекс i-ой буквы ключа
        let c = abc[(mi + ki) % 26]; // i-ый симфол шифра
        code += c;
        j++;
      } else {
        code += message[i];
      }
    }

    return this.reverse ? code.split('').reverse().join('') : code;
  }

  decrypt(code, key) {
    const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (code == undefined || key == undefined) throw new Error;
    code = code.toUpperCase();
    key = key.toUpperCase();
    let message = ''; let j = 0;

    for (let i = 0; i < code.length; i++) {
      if (code[i].match(/[A-Z]/)) {
        let ci = abc.indexOf(code[i]); //алфавитный индекс i-го символа шифра
        let ki_c = key[(j >= key.length) ? (j % key.length) : j]; //если ключ короткий, повторяем его до длины сообщения
        let ki = abc.indexOf(ki_c); //алфавитный индекс i-ой буквы ключа
        let m = abc[(26 + ci - ki) % 26]; // i-ый симфол сообщения
        message += m;
        j++;
      } else {
        message += code[i];
      }
    }

    return this.reverse ? message.split('').reverse().join('') : message;
  }
}

module.exports = VigenereCipheringMachine;