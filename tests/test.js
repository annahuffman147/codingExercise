var expect = require('chai').expect
var code = require('../main.js')


describe('changeToString', function(){
  it('should change string to number', function(){
    expect(code.changeToString(45)).to.equal('45')
    expect(code.changeToString('35')).to.equal('is a string')
    expect(code.changeToString('45.22')).to.equal('is a string')
  })
});

describe('singleDigitToWord', function(){
  it('should convert a single digit to a word', function(){
    expect(code.singleDigitToWord('1'), 'one')
    expect(code.singleDigitToWord('9'), 'nine')
  })
});

// describe('doubleDigitToWord', function(){
//   it('should convert a double digit that is above 19 to a word', function(){
//     expect(code.doubleDigitToWord('21'), 'twenty-one')
//     expect(code.doubleDigitToWord(39), 'thirty-nine')
//   })
// })
