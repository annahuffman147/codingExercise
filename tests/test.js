var expect = require('chai').expect
var code = require('../main.js')


describe('changeFromString', function(){
  it('should change string to number', function(){
    expect(code.changeFromString('45'), 45)
    expect(code.changeFromString(35), 'not a string')
    expect(code.changeFromString(45.22), 'not a string')
  })
});

describe('singleDigitToWord', function(){
  it('should convert a single digit to a word', function(){
    expect(code.singleDigitToWord(1), 'one')
    expect(code.singleDigitToWord(9), 'nine')
  })
});

describe('doubleDigitToWord', function(){
  it('should convert a double digit that is above 19 to a word', function(){
    expect(code.doubleDigitToWord('45'), 'twenty-one')
    expect(code.doubleDigitToWord(39), 'thirty-nine')
  })
})
