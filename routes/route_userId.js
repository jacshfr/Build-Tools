'use strict';

var randomEventId = require('../lib/randomEventId');

module.exports = function(app) {

  app.post('/userId', function(req, res) {
    res.json({name: req.body.name, userId: req.body.name + randomEventId()});
  });
};
