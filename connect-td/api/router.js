const express = require('express'),
  router = express.Router(),
  init = require('./init'),
  { getChat, getChatMembers, setSuperName } = require('./chats');

/*
router.get('/init', async (req, res) => {
  //return res.json(await init());
  return res.json((await init()).appDir);
});
*/
router.post('/getchat', async (req, res) => {
  return res.json(await getChat(req.body));
})

router.post('/getchatmembers', async (req, res) => {
  return res.json(await getChatMembers(req.body));
})

router.post('/setsupername', async (req, res) => {
  return res.json(await setSuperName(req.body));
})


// Default
router.get('/', (req, res) => {
  return res.json({response: "OK"});
});

module.exports = router;
