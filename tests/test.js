var expect = require('chai').expect
var code = require('../main.js')


describe('changeToString', function(){
  it('should change string to number', function(){
    expect(code.changeToString(45)).to.equal('45')
    expect(code.changeToString('35')).to.equal('is a string')
    expect(code.changeToString('45.22')).to.equal('is a string')
  })
});

describe('splitOnDecimal', function(){
  it('split number on decimal', function(){
    expect(code.splitOnDecimal('2523.04')).to.equal(['2523', '04'])
    expect(code.splitOnDecimal('39')).to.equal(['39', '00'])
  })
});

describe('singleDigitToWord', function(){
  it('should convert a single digit to a word', function(){
    expect(code.singleDigitToWord('1')).to.equal('one')
    expect(code.singleDigitToWord('9')).to.equal('nine')
  })
});

// describe('cents to fraction', function(){
//   it('change cents to fraction', function(){
//     expect(code.splitOnDecimal(['2523', '04'])).to.equal('04/100')
//     expect(code.splitOnDecimal(['39', '00'])).to.equal('04/100')
//   })
// })
