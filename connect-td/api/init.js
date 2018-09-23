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
    binaryPath: '/usr/local/lib/libtdjson',
    verbosityLevel: 2
  })

  await myclient.ready

  /*
  myclient.registerCallback('td:update', (update) => {
    console.log('Got update:', JSON.stringify(update, null, 2))
  })

  myclient.registerCallback('td:error', (update) => {
    console.error('Got error:', JSON.stringify(update, null, 2))
  })
  */
  return myclient
}

module.exports = init
