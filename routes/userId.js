'use strict';

var randomEventId = require('../lib/randomEventId');

module.exports = function(app) {

  app.post('/eventId', function(req, res) {
    if (err) return res.status(500).send('server error');
    res.json({name: req.body.name, userId: req.body.name + randomEventId()});
  });
};
