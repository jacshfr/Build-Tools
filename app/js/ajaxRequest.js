'use strict';

var $ = require('jquery');

module.exports = function(name) {
  $.post('/userId', {name: name}, function(data) {
    $('#userId').text(data.userId);
  }, 'json');
};
