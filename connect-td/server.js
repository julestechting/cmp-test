const express = require('express'),
  bodyParser = require('body-parser'),
  router = require('./api/router'),
  app = express();

app.use(bodyParser.json());
app.use('/', router);

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log('Express server listening on port ' + app.get('port'));
});
