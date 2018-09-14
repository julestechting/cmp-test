const readline = require('readline');

const telegram = require('./init'),
  myApp = require('../utils/getapp');

/*
const inputCode = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  const ask = (questionText) => {
    return new Promise((resolve, reject) => {
      rl.question(questionText, (input) => resolve(input));
    });
  };
  return await ask('Enter the code: ');
};
*/

const inputCode = () => {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input : process.stdin,
      output: process.stdout
    });
    rl.question('Please enter passcode: ', (input) => {
      rl.close();
      resolve(input);
    });
  });
}

const login = async () => {
  try {
    /*
    const sendCode = await telegram('auth.sendCode', {
      phone_number: myApp.phone,
      current_number: false,
      api_id: myApp.api_id,
      api_hash: myApp.api_hash
    });
    console.log(sendCode);
    const sendCode2 = await telegram('auth.resendCode', {
      phone_number: myApp.phone,
      phone_code_hash: sendCode.phone_code_hash
    });
    console.log(sendCode2);*/
    const = await inputCode();
    console.log(code);
    /*
    const res = await telegram('auth.signIn', {
      phone_number: myApp.phone,
      phone_code_hash: sendCode2.phone_code_hash,
      phone_code: code
    });
    return res;*/
    return({res: code});
  }
  catch (err) { throw(err); }
}

module.exports = login
