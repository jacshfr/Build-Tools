'use strict';

var $ = require('jquery');
var ajaxRequest = require('./ajaxRequest');
var makeRandomNum = require('./makeRandomNum');
var makeName = require('./makeName');
var nameArray = require('./nameArray');

$(function() {
  $('#button').on('click', function() {
    ajaxRequest(makeName(nameArray(), makeRandomNum()));
  });
});
