const { Client } = require('tglib')
const myapp = require('../utils/getapp')

const init = async () => {
  const myclient = new Client({
    apiId: myapp.api_id,
    apiHash: myapp.api_hash,
    auth: {
      type: 'user',
      value: myapp.phone
    },
    binaryPath: '/usr/local/lib/libtdjson'
  })

  await myclient.ready

  return myclient
}

module.exports = init
