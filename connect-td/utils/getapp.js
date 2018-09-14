const fs = require('fs'),
  { checkInt, checkStr, checkJSON } = require('./checkargs'),
  myAppFile = '/app.json';

/* Validate the content of the JSON object
 * api_id (int), api_hash (string),
 * phone (string), lang_code (string)
 */
function validateApp (data) {
  if (checkInt(data.api_id) &&
    checkStr(data.api_hash) &&
    checkStr(data.phone) && data.phone.charAt(0) == '+' &&
    checkStr(data.lang_code) &&
    checkJSON(data, 4))
    return data;
  throw("Validation failed");
}

// Add application version and environment
function addApp (data) {
  data.version = process.env.npm_package_version;
  if (process.env.NODE_ENV == "production") { data.dev = false; }
  else { data.dev = true; }
  return data;
}

// Read the file content and return JSON object
const myApp = () => {
  try {
      var myAppData = JSON.parse(fs.readFileSync(myAppFile, 'utf8'));
  }
  catch (err) {
    throw(err);
  }
  return addApp(validateApp(myAppData));
};

module.exports = myApp();
