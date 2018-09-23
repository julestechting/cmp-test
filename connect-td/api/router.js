const express = require('express'),
  router = express.Router(),
  { addChatMember, banChatMember, deleteSupergroup, getChat, getChatMembers, getContacts, getMember, getSupergroup, importContact, removeChatMember, setSuperName } = require('./chats');

router.post('/getchat', async (req, res) => {
  return res.json(await getChat(req.body));
})

router.post('/getchatmembers', async (req, res) => {
  return res.json(await getChatMembers(req.body));
})

router.post('/getmember', async (req, res) => {
  return res.json(await getMember(req.body));
})

router.post('/banmember', async (req, res) => {
  return res.json(await banChatMember(req.body));
})

router.post('/getsuper', async (req, res) => {
  return res.json(await getSupergroup(req.body));
})

router.post('/setsupername', async (req, res) => {
  return res.json(await setSuperName(req.body));
})

router.post('/removemember', async (req, res) => {
  return res.json(await removeChatMember(req.body));
})

router.post('/addmember', async (req, res) => {
  return res.json(await addChatMember(req.body));
})

router.post('/delsuper', async (req, res) => {
  return res.json(await deleteSupergroup(req.body));
})

router.get('/getcontacts', async (req, res) => {
  return res.json(await getContacts());
})

router.post('/importcontact', async (req, res) => {
  return res.json(await importContact(req.body));
})

// Default
router.get('/', (req, res) => {
  return res.json({response: "OK"});
});

module.exports = router;
