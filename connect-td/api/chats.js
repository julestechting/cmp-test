const { checkArray, checkInt, checkStr, checkJSON } = require('../utils/checkargs')
const init = require('./init')

const getChat = async (body) => {
  var result
  try {
    var client = await init()
    //console.log(client)
    if(checkJSON(body, 1) &&
      checkStr(body.chat_id)) {
      const chat = await client.fetch({
        '@type': 'getChat',
        'chat_id': body.chat_id
      })
      result = {type: "OK", response: chat}
    }
    else {
      result = {type: "error", code: "VALID-FAIL"}
    }
    client.loop = () => { return null }
    await client._destroy()
    console.log(client.client)
    client = null
  }
  catch (err) {
    console.log(err)
    result = {type: "error", code: "TL-API-FAIL"}
  }
  return result
}

const getSupergroup = async (body) => {
  var result
  try {
    const client = await init()
    if(checkJSON(body, 1) &&
      checkInt(body.supergroup_id)) {
      //Preload the supergroup
      const pc = await client.fetch({'@type': 'getSupergroup', 'supergroup_id': body.supergroup_id})
      const chat = await client.fetch({'@type': 'getSupergroupFullInfo', 'supergroup_id': body.supergroup_id})
      result = {type: "OK", response: chat}
    }
    else {
      result = {type: "error", code: "VALID-FAIL"}
    }
  }
  catch (err) {
    console.log(err)
    result = {type: "error", code: "TL-API-FAIL"}
  }
  return result
}

const deleteSupergroup = async (body) => {
  var result
  try {
    const client = await init()
    if(checkJSON(body, 1) &&
      checkInt(body.supergroup_id)) {
      //Preload the supergroup
      const pc = await client.fetch({'@type': 'getSupergroup', 'supergroup_id': body.supergroup_id})
      const chat = await client.fetch({'@type': 'deleteSupergroup', 'supergroup_id': body.supergroup_id})
      result = {type: "OK", response: chat}
    }
    else {
      result = {type: "error", code: "VALID-FAIL"}
    }
  }
  catch (err) {
    console.log(err)
    result = {type: "error", code: "TL-API-FAIL"}
  }
  return result
}


// chat members are only available for Supergroups and Channels
// To change: should have the chat_id, check the chat type and if supergroup then get the members
const getChatMembers = async (body) => {
  var result
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
      result = {type: "OK", response: chat}
    }
    else {
      result = {type: "error", code: "VALID-FAIL"}
    }
  }
  catch (err) {
    console.log(err)
    result = {type: "error", code: "TL-API-FAIL"}
  }
  return result
}

const getMember = async (body) => {
  var result
  try {
    const client = await init()
    if(checkJSON(body, 2) &&
      checkInt(body.chat_id) &&
      checkInt(body.user_id)) {
      //Preload the supergroup
      const pc = await client.fetch({'@type': 'getUser', 'user_id': body.user_id})
      const chat = await client.fetch({
        '@type': 'getChatMember',
        'chat_id': body.chat_id,
        'user_id': body.user_id
      })
      result = {type: "OK", response: chat}
    }
    else {
      result = {type: "error", code: "VALID-FAIL"}
    }
  }
  catch (err) {
    console.log(err)
    result = {type: "error", code: "TL-API-FAIL"}
  }
  return result
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
      result = {type: "OK", response: chat}
    }
    else {
      result = {type: "error", code: "VALID-FAIL"}
    }
  }
  catch (err) {
    result = {type: "error", code: "TL-API-FAIL"}
  }
}

const removeChatMember = async (body) => {
  try {
    const client = await init()
    if(checkJSON(body, 2) &&
      checkInt(body.chat_id) &&
      checkInt(body.user_id)) {
      //Preload the user
      const pc = await client.fetch({'@type': 'getUser', 'user_id': body.user_id})
      const chat = await client.fetch({
        '@type': 'setChatMemberStatus',
        'chat_id': body.chat_id,
        'user_id': body.user_id,
        'status': {
          '@type': 'chatMemberStatusLeft'
        }
      })
      //WAS: '@type': 'chatMemberStatusLeft'
      result = {type: "OK", response: "SUCCESS"}
    }
    else {
      result = {type: "error", code: "VALID-FAIL"}
    }
  }
  catch (err) {
    console.log(err)
    result = {type: "error", code: "TL-API-FAIL"}
  }
  return result
}

const banChatMember = async (body) => {
  try {
    const client = await init()
    if(checkJSON(body, 2) &&
      checkInt(body.chat_id) &&
      checkInt(body.user_id)) {
      //Preload the user
      const pc = await client.fetch({'@type': 'getUser', 'user_id': body.user_id})
      const chat = await client.fetch({
        '@type': 'setChatMemberStatus',
        'chat_id': body.chat_id,
        'user_id': body.user_id,
        'status': {
          '@type': 'chatMemberStatusBanned'
        }
      })
      //WAS: '@type': 'chatMemberStatusLeft'
      result = {type: "OK", response: "SUCCESS"}
    }
    else {
      result = {type: "error", code: "VALID-FAIL"}
    }
  }
  catch (err) {
    console.log(err)
    result = {type: "error", code: "TL-API-FAIL"}
  }
  return result
}


/*
 * Doesn't work!
 * If me is not contact & user privacy/groups&channel = My Contacts => error 403 USER_PRIVACY_RESTRICTED
 * If me is not contact & user privacy/groups&channel = Everyone => error 400 USER_NOT_MUTUAL_CONTACT
 * If me is contact & user privacy/groups&channel = My Contacts => error 400 USER_NOT_MUTUAL_CONTACT
 * If me is contact & user privacy/groups&channel = Everyone => error 400 USER_NOT_MUTUAL_CONTACT
 */
const addChatMember = async (body) => {
  try {
    const client = await init()
    if(checkJSON(body, 2) &&
      checkInt(body.chat_id) &&
      checkInt(body.user_id)) {
      //Preload the user
      const pc = await client.fetch({'@type': 'getUser', 'user_id': body.user_id})
      const chat = await client.fetch({
        '@type': 'addChatMember',
        'chat_id': body.chat_id,
        'user_id': body.user_id,
        'forward_limit': 10 //Not applicable as the group is a supergroup
      })
      result = {type: "OK", response: "SUCCESS"}
    }
    else {
      result = {type: "error", code: "VALID-FAIL"}
    }
  }
  catch (err) {
    console.log(err)
    result = {type: "error", code: "TL-API-FAIL"}
  }
  return result
}

const getContacts = async () => {
  try {
    const client = await init()
    const contacts = await client.fetch({'@type': 'getContacts'})
    result = {type: "OK", response: contacts}
  }
  catch (err) {
    console.log(err)
    result = {type: "error", code: "TL-API-FAIL"}
  }
  return result
}

const importContact = async (body) => {
  try {
    const client = await init()
    if(checkJSON(body, 2) &&
      checkInt(body.user_id) &&
      checkStr(body.phone_number)) {
      //Get user information
      const pc = await client.fetch({'@type': 'getUser', 'user_id': body.user_id})
      const contacts = await client.fetch({
        '@type': 'importContacts',
        'contacts': [
          {
            '@type': 'contact',
            'phone_number': body.phone_number,
            'first_name': pc.first_name,
            'last_name': pc.last_name,
            'user_id': body.user_id
          }
        ]
      })
      result = {type: "OK", response: contacts}
    }
    else {
      result = {type: "error", code: "VALID-FAIL"}
    }
  }
  catch (err) {
    console.log(err)
    result = {type: "error", code: "TL-API-FAIL"}
  }
  return result
}

module.exports = {
  addChatMember,
  banChatMember,
  deleteSupergroup,
  getChat,
  getChatMembers,
  getContacts,
  getMember,
  getSupergroup,
  importContact,
  removeChatMember,
  setSuperName
}
