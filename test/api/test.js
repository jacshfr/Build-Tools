'use strict';

var expect = require('chai').expect;
var chaihttp = require('chai-http');
chai.use(chaihttp);

require('../../server');

var regex = /^.*[a-z]{5}[0-9]{2}$/;

describe('accessing endpoint', function() {
  it('should respond to request', function(done) {
    chai.request('http://locolhost:3000')
    .post('/userId')
    .send({name: 'sample'})
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(res.body).to.have.property('userId');
      expect(regex.test(res.body.userId)).to.be.true;
    })
  })

})

