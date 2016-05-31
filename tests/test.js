var expect = require('chai').expect
var code = require('../main.js')


describe('changeToString', function(){
  it('should change amount to string', function(){
    expect(code.changeToString(45), '45')
    expect(code.changeToString('35'), '35')
    expect(code.changeToString('45.22'), '45.22')
  })
});

describe('splitOnDecimal', function(){
  it('should split number on decimal', function(){
    expect(code.splitOnDecimal('2523.04'),['2523', '04'])
    expect(code.splitOnDecimal('39'),['39', '00'])
  })
});

describe('splitDollarAmount', function(){
  it('should split dollar amount into groups of three', function(){
    expect(code.splitDollarAmount('2523.04'),['2','523'])
    expect(code.splitDollarAmount('3432983.72'),['3', '432', '983'])
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
  it('should change cents to fraction', function(){
    expect(code.centsToFraction('04'), ' and 04/100 dollars')
    expect(code.centsToFraction('00')).to.equal(' dollars')
  })
});

describe('twoDigitsToWord', function(){
  it('should change two digits to words', function(){
    expect(code.twoDigitsToWord('50'), 'fifty')
    expect(code.twoDigitsToWord('13'), 'thirteen')
    expect(code.twoDigitsToWord('65'), 'sixty-five')
  })
});

describe('threeDigitsToWord', function(){
  it('should change three digits to words', function(){
    expect(code.threeDigitsToWord('050'), 'fifty')
    expect(code.threeDigitsToWord('013'), 'thirteen')
    expect(code.threeDigitsToWord('065'), 'sixty-five')
    expect(code.threeDigitsToWord('123'), 'one hundred twenty-three')
    expect(code.threeDigitsToWord('706'), 'seven hundred six')
    expect(code.threeDigitsToWord('300'), 'three hundred')
    expect(code.threeDigitsToWord('000'), '')
    expect(code.threeDigitsToWord('003'), 'three')
  })
});

describe('changeDollarArrayToWords', function(){
  it('should iterate over an array and change each index of digits to words', function(){
    expect(code.changeDollarArrayToWords('2523.04'), ['two thousand', 'five hundred twenty-three'])
    expect(code.changeDollarArrayToWords('3432983.72'), ['three million', 'four hundred thirty-two thousand', 'nine hundred eighty-three'])
  })
})

describe('printFinalResult', function(){
  it('should print final result', function(){
    expect(code.printFinalResult('1.58'), 'One and 58/100 dollars')
    expect(code.printFinalResult('31.35'), 'Thirty-one and 35/100 dollars')
    expect(code.printFinalResult('2523.04'), 'Two thousand five hundred twenty-three and 04/100 dollars ')
    expect(code.printFinalResult('1042.16'), 'One thousand forty-two and 16/100 dollars')
    expect(code.printFinalResult('532'), 'Five hundred thirty-two dollars')
    expect(code.printFinalResult('3432983.72'), 'Three million four hundred thirty-two thousand nine hundred eighty-three and 72/100 dollars')
  })
})
