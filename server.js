'use strict';

var express = require('express');
var bodyparser = require('body-parser');
var app = express();

app.use(bodyparser.json());

require('./routes/userId')(app);

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('server running on port: ' + app.get('port'));
});
