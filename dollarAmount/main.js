var singleDigits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
var tenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
var tensPlace = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
var labels = ['', ' thousand ', ' million ', ' billion ']


module.exports = {

  changeToString: function (amount) {
    return amount.toString()
  },

  checkForCents: function(amount){
    var string = this.changeToString(amount)
    if (string.indexOf('.') == -1) {
      return string + '.00'
    } else {
      return string
    }
  },

  arrayOnDecimal: function(amount) {
    return this.checkForCents(amount).split('.')
  },
// centsToFraction uses changeToString, checkForCents, and arrayOnDecimal. centsToFraction is used in the final result.
  centsToFraction: function (amount) {
    var denominator = '100'
    var numerator = this.arrayOnDecimal(amount)[1]
    var fraction = numerator + '/' + denominator
    if (numerator === '00') {
      return ' dollars'
    } else {
      return ' and ' + fraction + ' dollars'
    }
  },

  // ---------------------------------

  splitDollarAmount: function(amount){
    var dollarAmount = this.arrayOnDecimal(amount)[0]
    return dollarAmount.split(/(?=(?:\d\d\d)*$)/)
  },

  removeBeginningZeros: function(amount){
    var noBeginningZerosArray = []
    var splitDollarAmountArray =  this.splitDollarAmount(amount)
    for (var i = 0; i < splitDollarAmountArray.length; i++) {
      if (splitDollarAmountArray[i].substring(0, 2) == '00'){
        noBeginningZerosArray.push(splitDollarAmountArray[i][2])
      } else if (splitDollarAmountArray[i][0] == '0'){
        noBeginningZerosArray.push(splitDollarAmountArray[i].substr(1, 2))
      } else {
        noBeginningZerosArray.push(splitDollarAmountArray[i])
      }
    }
    return noBeginningZerosArray
  },

  checkLength: function(index){
    return index.length
  },

  singleDigitToWord: function (amount) {
    return singleDigits[amount]
  },

  twoDigitsToWord: function(amount){
    if (amount[1] == '0') {
      return tensPlace[amount[0]]
    } else if (amount[0] == '1'){
      return tenToNineteen[amount[1]]
    } else {
      return tensPlace[amount[0]] + '-' + singleDigits[amount[1]]
    }
  },

  threeDigitsToWord: function (amount){
    var hundreds = singleDigits[amount[0]] + ' hundred '
    var teens = tenToNineteen[amount[1]]
    var singleNum = singleDigits[amount[2]]
    var tens = tensPlace[amount[1]]

    if (amount.substr(1, 2) == '00') {//300
      return hundreds
    } else if (amount.substr(1, 1) == '0'){//304
      return hundreds + singleNum
    } else if (amount.substr(2, 1) === '0') {//340
      return hundreds + tens
    } else if (amount.substr(1, 1) == '1'){//314
      return hundreds + teens
    } else {
      return hundreds + tens + '-' + singleNum
    }
  },

  changeDollarArrayToWords: function (amount) {
    var finalArray = this.removeBeginningZeros(amount)
    var arrayDollarWords = []
    for (var i = 0; i < finalArray.length; i++){
      var label = labels[(finalArray.length-1-i)]
      if (finalArray[i].length === 1) {
        arrayDollarWords.push(this.singleDigitToWord(finalArray[i]) + label)
      } else if (finalArray[i].length === 2) {
        arrayDollarWords.push(this.twoDigitsToWord(finalArray[i]) + label)
      } else {
        arrayDollarWords.push(this.threeDigitsToWord(finalArray[i]) + label)
      }
    }
    return arrayDollarWords
  },

  printFinalResult: function (amount) {
    var arrayDollarWords = this.changeDollarArrayToWords(amount)
    var cents = this.centsToFraction(amount)
    var concatString = arrayDollarWords.join('') + cents
    var finalAnswer = concatString[0].toUpperCase() + concatString.slice(1)
    console.log(finalAnswer)
  }

}
