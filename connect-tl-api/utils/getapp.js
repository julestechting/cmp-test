const fs = require('fs'),
  myAppFile = '/app.json';

/* Validate the content of the JSON object
 * api_id (int), api_hash (string),
 * phone (string), lang_code (string)
 */
function validateApp (data) {
  if ((typeof data.api_id === 'number') && Math.floor(data.api_id) == data.api_id &&
    (typeof data.api_hash === 'string') && data.api_hash.length > 0 &&
    (typeof data.phone === 'string') && data.phone.charAt(0) == '+' &&
    (typeof data.lang_code === 'string') && data.lang_code.length > 0 &&
    Object.keys(data).length == 4)
    return data;
  throw("Validation failed");
}

// Read the file content and return JSON object
const myApp = () => {
  try {
      var myAppData = JSON.parse(fs.readFileSync(myAppFile, 'utf8'));
  }
  catch (err) {
    throw(err);
  }
  return validateApp(myAppData);
};

module.exports = myApp();
