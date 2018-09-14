const { checkInt, checkStr, checkJSON } = require('../utils/checkargs')
const init = require('./init')

const getChat = async (body) => {
  try {
    const client = await init()
    if(checkJSON(body, 1) &&
      checkStr(body.chat_id)) {
      const chat = await client.fetch({
        '@type': 'getChat',
        'chat_id': body.chat_id
      })
      return {response: "OK", chat: chat}
    }
    else {
      return {response: "Validation failed"}
    }
  }
  catch (err) {
    throw(err)
  }
}

const getChatMembers = async (body) => {
  try {
    const client = await init()
    if(checkJSON(body, 1) &&
      checkInt(body.supergroup_id)) {
      //Preload the supergroup
      const pc = await client.fetch({'@type': 'getSupergroup', 'supergroup_id': body.supergroup_id})
      const chat = await client.fetch({
        '@type': 'getSupergroupMembers',
        'supergroup_id': body.supergroup_id,
        'SupergroupMembersFilter': { '@type': 'SupergroupMembersFilterRecent' },
        'offset': '0',
        'limit': '10'
      })
      return {response: "OK", chat: chat}
    }
    else {
      return {response: "Validation failed"}
    }
  }
  catch (err) {
    throw(err)
  }
}

const setSuperName = async (body) => {
  try {
    const client = await init()
    if(checkJSON(body, 2) &&
      checkInt(body.supergroup_id) &&
      checkStr(body.username)) {
      //Preload the supergroup
      const pc = await client.fetch({'@type': 'getSupergroup', 'supergroup_id': body.supergroup_id})
      const chat = await client.fetch({
        '@type': 'setSupergroupUsername',
        'supergroup_id': body.supergroup_id,
        'username': body.username
      })
      return {response: "OK", chat: chat}
    }
    else {
      return {response: "Validation failed"}
    }
  }
  catch (err) {
    throw(err)
  }
}

module.exports = { getChat, getChatMembers, setSuperName }
