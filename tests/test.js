var expect = require('chai').expect
var code = require('../main.js')


describe('changeFromString', function(){
  it('should change string to number', function(){
    expect(code.changeFromString('45')).to.equal(45)
    expect(code.changeFromString(35)).to.equal('not a string')
    expect(code.changeFromString(45.22)).to.equal('not a string')
  })
})
