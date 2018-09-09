const telegram = require('./init')
const myApp = require('../utils/getapp')

const checkPhone = async () => {
  try {
    const checkedPhone = await telegram('auth.checkPhone', {phone_number: myApp.phone});
    return checkedPhone;
  }
  catch (err) { throw(err); }
}

module.exports = checkPhone
