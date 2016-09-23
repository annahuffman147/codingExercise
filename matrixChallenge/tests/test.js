var expect = require('chai').expect;
var code = require('../main.js')

describe('inputToArray', function () {
  it('should return an array of digits from 0 to the input number', function() {
    expect(code.inputToArray(5), [0, 1, 2, 3, 4, 5])
  })
})

describe('numberOfInnerArrays', function () {
  it('should return square root of the input to one fixed decimal point then round to nearest whole number (11=3)', function() {
    expect(code.numberOfInnerArrays(11), 3)
  })
  it('should return square root of the input to one fixed decimal point then round to nearest whole number (12=4)', function() {
    expect(code.numberOfInnerArrays(12), 4)
  })
})

describe('matrixStructure', function () {
  it('should return outerArray.length equal to numberOfInnerArrays', function() {
    expect(code.matrixStructure(12), 4)
  })
})

describe('zeroIndex', function () {
  it('determine zero innerArray', function() {
    expect(code.zeroIndex(12), 1)
    expect(code.zeroIndex(25), 2)
  })
})
