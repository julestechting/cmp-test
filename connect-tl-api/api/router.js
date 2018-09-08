const express = require('express'),
  router = express.Router();

// Default
router.get('/', (res, req) => {
  res.json({response: "OK"});
});

export.modules = router;
