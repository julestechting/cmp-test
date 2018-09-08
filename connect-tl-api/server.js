const express = require('express'),
  router = require('./api/router'),
  app = express();

app.use('/', router);

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log('Express server listening on port ' + app.get('port'));
});
