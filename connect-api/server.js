const express = require('express'),
  app = express(),
  router = express.Router();

// Default
router.get('/', function (req, res) {
  console.log('Home page hit');
  res.send("Welcome to the API!");
});

app.use('/api', router);
app.use('/', (req, res) => res.send("Welcome to the homepage!"));

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
