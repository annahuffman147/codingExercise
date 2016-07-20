var singleDigits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
var tenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
var tensPlace = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
var labels = ['', ' thousand ', ' million ', ' billion ']


module.exports = {

  changeToString: function (amount) {
    if (typeof amount !== 'string') {
      amount = amount.toString()
      return amount
    } else {
      return amount
    }
  },

  splitOnDecimal: function(amount) {
    var changeToString = this.changeToString(amount)
    if (amount.indexOf('.') == -1) {
      amount = amount + '.00'
    }
    var arrayOnDecimal = amount.split('.')
    return arrayOnDecimal
  },

  splitDollarAmount: function(amount){
    var arrayOnDecimal = this.splitOnDecimal(amount)
    var dollarAmount = arrayOnDecimal[0]
    var arrayDollarAmount = dollarAmount.split(/(?=(?:...)*$)/)
    return arrayDollarAmount
  },

  singleDigitToWord: function (digit) {
    if (digit.length === 1) {
      digit = singleDigits[digit]
      return digit
    } else {
      return
    }
  },

  centsToFraction: function (amount) {
    var denominator = '100'
    var arrayDollarAmount = this.splitOnDecimal(amount)
    var numerator = arrayDollarAmount[1]
    if (numerator !== '00') {
      var fraction = numerator + '/' + denominator;
      return ' and ' + fraction + ' dollars';
    } else {
      return ' dollars';
    }
  },

  twoDigitsToWord: function(twoDigits){
    if (twoDigits.substring(1) == '0') {
      twoDigits = tensPlace[twoDigits.substring(0, 1)]
      return twoDigits
    } else if (twoDigits.substring(0, 1) == '1'){
      twoDigits = tenToNineteen[twoDigits.substring(1)]
      return twoDigits
    } else {
      twoDigits = tensPlace[twoDigits.substring(0, 1)] + '-' + singleDigits[twoDigits.substring(1)]
      return twoDigits
    }
  },

  threeDigitsToWord: function (threeDigits){
    if (threeDigits === '000') {
      threeDigits = ''
    } else if (threeDigits.substring(0, 2) === '00') {
      threeDigits = singleDigits[threeDigits.substring(2)]
    } else if (threeDigits.substring(0, 1)=== '0') {
        if (threeDigits.substring(2) === '0') {
          threeDigits = tensPlace[threeDigits.substring(1, 2)]
        } else if (threeDigits.substring(1, 2) == '1'){
          threeDigits = tenToNineteen[threeDigits.substring(2)]
        } else {
          threeDigits = tensPlace[threeDigits.substring(1, 2)] + '-' + singleDigits[threeDigits.substring(2)]
        }
    } else {
      if (threeDigits.substring(2) === '0') {
        threeDigits = singleDigits[threeDigits.substring(0, 1)] + ' hundred ' + tensPlace[threeDigits.substring(1, 2)]
      } else if (threeDigits.substring(1, 2) == '1'){
        threeDigits = singleDigits[threeDigits.substring(0, 1)] +' hundred ' + tenToNineteen[threeDigits.substring(2)]
      } else if (threeDigits.substring(1, 2) == '0'){
        threeDigits = singleDigits[threeDigits.substring(0, 1)] +' hundred ' + singleDigits[threeDigits.substring(2)]
      } else {
        threeDigits = singleDigits[threeDigits.substring(0, 1)] + ' hundred ' + tensPlace[threeDigits.substring(1, 2)] + '-' + singleDigits[threeDigits.substring(2)]
      }
    }
  },

  changeDollarArrayToWords: function (amount) {
    var arrayDollarAmount = this.splitDollarAmount(amount)
    var cents = this.centsToFraction(amount)
    var arrayDollarWords = []
    var threeDigitsFunction = this.threeDigitsToWord(amount)
    for (var i = 0; i < arrayDollarAmount.length; i++){
      var label = labels[(arrayDollarAmount.length-1-i)]
      if (arrayDollarAmount[i].length === 1) {
        arrayDollarWords.push(singleDigits[arrayDollarAmount[i]] + label)
      } else if (arrayDollarAmount[i].length === 2) {
        if (arrayDollarAmount[i].substring(1) == '0') {
          arrayDollarWords.push(tensPlace[arrayDollarAmount[i].substring(0, 1)] + label)
        } else if (arrayDollarAmount[i].substring(0, 1) == '1'){
          arrayDollarWords.push(tenToNineteen[arrayDollarAmount[i].substring(1)] + label)
        } else {
          arrayDollarWords.push(tensPlace[arrayDollarAmount[i].substring(0, 1)] + '-' + singleDigits[arrayDollarAmount[i].substring(1)] + label)
        }
      } else {
        // arrayDollarWords.push(threeDigitsToWord(arrayDollarAmount[i]))
        if (arrayDollarAmount[i] === '000') {
          arrayDollarWords.push('')
        } else if (arrayDollarAmount[i].substring(0, 2) === '00') {
          arrayDollarWords.push(singleDigits[arrayDollarAmount[i].substring(2)] + label)
        } else if (arrayDollarAmount[i].substring(0, 1)=== '0') {
            if (arrayDollarAmount[i].substring(2) === '0') {
              arrayDollarWords.push(tensPlace[arrayDollarAmount[i].substring(1, 2)] + label)
            } else if (arrayDollarAmount[i].substring(1, 2) == '1'){
              arrayDollarWords.push(tenToNineteen[arrayDollarAmount[i].substring(2)] + label)
            } else {
              arrayDollarWords.push(tensPlace[arrayDollarAmount[i].substring(1, 2)] + '-' + singleDigits[arrayDollarAmount[i].substring(2)] + label)
            }
        } else {
            if (arrayDollarAmount[i].substring(2) === '0') {
              arrayDollarWords.push(singleDigits[arrayDollarAmount[i].substring(0, 1)] + ' hundred ' + tensPlace[arrayDollarAmount[i].substring(1, 2)] + label)
            } else if (arrayDollarAmount[i].substring(1, 2) == '1'){
              arrayDollarWords.push(singleDigits[arrayDollarAmount[i].substring(0, 1)] +' hundred ' + tenToNineteen[arrayDollarAmount[i].substring(2)] + label)
            } else if (arrayDollarAmount[i].substring(1, 2) == '0'){
              arrayDollarWords.push(singleDigits[arrayDollarAmount[i].substring(0, 1)] +' hundred ' + singleDigits[arrayDollarAmount[i].substring(2)] + label)
            } else {
              arrayDollarWords.push(singleDigits[arrayDollarAmount[i].substring(0, 1)] + ' hundred ' + tensPlace[arrayDollarAmount[i].substring(1, 2)] + '-' + singleDigits[arrayDollarAmount[i].substring(2)] + label)
            }
        }
      }
    }
    return arrayDollarWords
  },

  printFinalResult: function (amount) {
    var arrayDollarWords = this.changeDollarArrayToWords(amount)
    var cents = this.centsToFraction(amount)
    var concatString = arrayDollarWords.join().replace(/,/g, '') + cents
    var finalAnswer = concatString.charAt(0).toUpperCase() + concatString.slice(1)
    console.log(finalAnswer);
  }
}
