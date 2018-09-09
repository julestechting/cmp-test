const { MTProto } = require('telegram-mtproto')
const myApp = require('../utils/getapp')

const api = {
  invokeWithLayer: 0xda9b0d0d,
  layer: 57,
  initConnection: 0x69796de9,
  api_id: myApp.api_id,
  app_version: myApp.version,
  lang_code: myApp.lang_code
}

const server = { webogram: true, dev: myApp.dev }

const telegram = MTProto({api, server})

module.exports = telegram
