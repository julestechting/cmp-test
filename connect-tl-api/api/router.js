const express = require('express'),
  router = express.Router(),
  checkPhone = require('./check-phone'),
  login = require('./login');

router.get('/checkphone', async (req, res) => {
  return res.json(await checkPhone());
});

router.get('/getme', async (req, res) => {
  return res.json(await login());
});

// Default
router.get('/', (req, res) => {
  return res.json({response: "OK"});
});

module.exports = router;
