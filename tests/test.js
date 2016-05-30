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
    expect(code.splitOnDecimal('2523.04'),['2523', '04'])
    expect(code.splitOnDecimal('39'),['39', '00'])
  })
});

describe('singleDigitToWord', function(){
  it('should convert a single digit to a word', function(){
    expect(code.singleDigitToWord('1')).to.equal('one')
    expect(code.singleDigitToWord('9')).to.equal('nine')
    expect(code.singleDigitToWord('99')).to.equal()
  })
});

describe('centsToFraction', function(){
  it('change cents to fraction', function(){
    expect(code.centsToFraction('04'), 'and 04/100 dollars')
    expect(code.centsToFraction('00')).to.equal('dollars')
  })
});

describe('twoDigitsToWord', function(){
  it('change two digits to words', function(){
    expect(code.twoDigitsToWord('50'), 'fifty')
    expect(code.twoDigitsToWord('13'), 'thirteen')
    expect(code.twoDigitsToWord('65'), 'sixty-five')
  })
});

describe('threeDigitsToWord', function(){
  it('change three digits to words', function(){
    expect(code.threeDigitsToWord('050'), 'fifty')
    expect(code.threeDigitsToWord('013'), 'thirteen')
    expect(code.threeDigitsToWord('065'), 'sixty-five')
    // expect(code.threeDigitsToWord('123'), 'one hundred twenty-three')
    // expect(code.threeDigitsToWord('706'), 'seven hundred six')
    // expect(code.threeDigitsToWord('300'), 'three hundred')
    expect(code.threeDigitsToWord('000'), '')
    expect(code.threeDigitsToWord('003'), 'three')
  })
});
