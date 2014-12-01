'use strict';

var expect = require('chai').expect;
var makeName = require('../../app/js/makeName');
var makeRandomNum = require('../../app/js/makeRandomNum');
var nameArray = require('../../app/js/nameArray');

var regex = /^[a-z]{4}$/;

describe('Making a new Name', function() {
  it('should make random number', function() {
    expect(makeRandomNum()).to.be.below(15);
  });

  it('should create a new name', function() {
    expect(
      regex.test(makeName(
        nameArray(), makeRandomNum()))).to.be.true;
  });

});
