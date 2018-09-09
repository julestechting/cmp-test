const express = require('express'),
  router = express.Router(),
  checkPhone = require('./check-phone');

router.get('/checkphone', async (req, res) => {
  return res.json(await checkPhone());
});

// Default
router.get('/', (req, res) => {
  return res.json({response: "OK"});
});

module.exports = router;
