


var singleDigits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
var tenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
var tensPlace = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
var labels = ['', 'thousand', 'million', 'billion']


module.exports = {

  changeToString: function (number) {
    console.log(typeof number);
    if (typeof number !== 'string') {
      number = number.toString();
      console.log(number);
      console.log(typeof number);
      return number;
    } else {
      console.log(number + " is a string");
      return 'is a string'
    }
  },

  splitOnDecimal: function(amount) {
    console.log(amount);
    if (amount.indexOf('.') == -1) {
      amount = amount + '.00'
      console.log(amount);
    }
    var arrayOnDecimal = amount.split('.')
    amount = arrayOnDecimal
    console.log(amount);
    return amount
  },

  splitDollarAmount: function(amount){
    if (amount.indexOf('.') == -1) {
      amount = amount + '.00'
    }
    var arrayOnDecimal = amount.split('.')
    var dollarAmount = arrayOnDecimal[0]
    var arrayDollarAmount = dollarAmount.split(/(?=(?:...)*$)/)
    console.log(arrayDollarAmount);
  },

//this will work on the ones spaces
  singleDigitToWord: function (digit) {
    console.log(digit);
    console.log(typeof(digit));
    console.log(digit.length);
    if (digit.length === 1) {
      console.log(digit + " is a single digit");
      digit = singleDigits[digit]
      console.log(typeof(digit));
      console.log(digit);
      return digit
    } else {
      return
    }
  },

  centsToFraction: function (numerator) {
    var denominator = '100';
    if (numerator !== '00') {
      var fraction = numerator + '/' + denominator;
      console.log(' and ' + fraction + ' dollars');
      return 'and' + fraction + ' dollars';
    } else {
      return 'dollars';
    }
  },

  twoDigitsToWord: function(twoDigits){
    if (twoDigits.substring(1) == '0') {
      twoDigits = tensPlace[twoDigits.substring(0, 1)]
      console.log(twoDigits);
      return
    } else if (twoDigits.substring(0, 1) == '1'){
      twoDigits = tenToNineteen[twoDigits.substring(1)]
      console.log(twoDigits);
      return
    } else {
      twoDigits = tensPlace[twoDigits.substring(0, 1)] + '-' + singleDigits[twoDigits.substring(1)]
      console.log(twoDigits);
      return
    }
  },

  threeDigitsToWord: function (threeDigits){
    console.log(threeDigits.substring(0, 1));
    console.log(threeDigits.substring(1, 2));
    console.log(threeDigits.substring(2));
    if (threeDigits === '000') {
      console.log(threeDigits);
      threeDigits = ''
      console.log(threeDigits);
      return
    } else if (threeDigits.substring(0, 2) === '00') {
      console.log(threeDigits.substring(2));
      threeDigits = singleDigits[threeDigits.substring(2)]
      console.log(threeDigits);
      return
    } else if (threeDigits.substring(0, 1)=== '0') {
      console.log('made it');
        if (threeDigits.substring(2) === '0') {
          threeDigits = tensPlace[threeDigits.substring(1, 2)]
          console.log(threeDigits);
          return
        } else if (threeDigits.substring(1, 2) == '1'){
          threeDigits = tenToNineteen[threeDigits.substring(2)]
          console.log(threeDigits);
          return
        } else {
          threeDigits = tensPlace[threeDigits.substring(1, 2)] + '-' + singleDigits[threeDigits.substring(2)]
          console.log(threeDigits);
          return
        }
    } else {
      if (threeDigits.substring(2) === '0') {
        threeDigits = singleDigits[threeDigits.substring(0, 1)] + ' hundred ' + tensPlace[threeDigits.substring(1, 2)]
        console.log(threeDigits);
        return
      } else if (threeDigits.substring(1, 2) == '1'){
        threeDigits = singleDigits[threeDigits.substring(0, 1)] +' hundred ' + tenToNineteen[threeDigits.substring(2)]
        console.log(threeDigits);
        return
      } else if (threeDigits.substring(1, 2) == '0'){
        threeDigits = singleDigits[threeDigits.substring(0, 1)] +' hundred ' + singleDigits[threeDigits.substring(2)]
        console.log(threeDigits);
        return
      } else {
        threeDigits = singleDigits[threeDigits.substring(0, 1)] + ' hundred ' + tensPlace[threeDigits.substring(1, 2)] + '-' + singleDigits[threeDigits.substring(2)]
        console.log(threeDigits);
        return
      }
    }
  },

  changeDollarArrayToWords: function (amount) {
    if (amount.indexOf('.') == -1) {
      amount = amount + '.00'
    }
    var arrayOnDecimal = amount.split('.')
    var dollarAmount = arrayOnDecimal[0]
    var cents = arrayOnDecimal[1]
    var arrayDollarAmount = dollarAmount.split(/(?=(?:...)*$)/)
    var arrayDollarWords = []

    var denominator = '100';
    if (cents !== '00') {
      var fraction = cents + '/' + denominator
      cents = ' and ' + fraction + ' dollars'
    } else {
      cents = 'dollars'
    }
    console.log(arrayDollarAmount)

    for (var i = 0; i <= arrayDollarAmount.length; i++){
      console.log(arrayDollarWords);
      if (arrayDollarAmount[i].length === 1) {
        arrayDollarWords.push(singleDigits[arrayDollarAmount[i]])
      } else if (arrayDollarAmount[i].length === 2) {
        if (arrayDollarAmount[i].substring(1) == '0') {
          arrayDollarWords.push(tensPlace[arrayDollarAmount[i].substring(0, 1)])
        } else if (arrayDollarAmount[i].substring(0, 1) == '1'){
          arrayDollarWords.push(tenToNineteen[arrayDollarAmount[i].substring(1)])
        } else {
          arrayDollarWords.push(tensPlace[arrayDollarAmount[i].substring(0, 1)] + '-' + singleDigits[arrayDollarAmount[i].substring(1)])
        }
      } else {
        console.log(arrayDollarAmount);
        if (arrayDollarAmount[i] === '000') {
          arrayDollarWords.push('')
        } else if (arrayDollarAmount[i].substring(0, 2) === '00') {
          arrayDollarWords.push(singleDigits[arrayDollarAmount[i].substring(2)])
        } else if (arrayDollarAmount[i].substring(0, 1)=== '0') {
            if (arrayDollarAmount[i].substring(2) === '0') {
              arrayDollarWords.push(tensPlace[arrayDollarAmount[i].substring(1, 2)])
            } else if (arrayDollarAmount[i].substring(1, 2) == '1'){
              arrayDollarWords.push(tenToNineteen[arrayDollarAmount[i].substring(2)])
            } else {
              arrayDollarWords.push(tensPlace[arrayDollarAmount[i].substring(1, 2)] + '-' + singleDigits[arrayDollarAmount[i].substring(2)])
            }
        } else {
            if (arrayDollarAmount[i].substring(2) === '0') {
              arrayDollarWords.push(singleDigits[arrayDollarAmount[i].substring(0, 1)] + ' hundred ' + tensPlace[arrayDollarAmount[i].substring(1, 2)])
            } else if (arrayDollarAmount[i].substring(1, 2) == '1'){
              arrayDollarWords.push(singleDigits[arrayDollarAmount[i].substring(0, 1)] +' hundred ' + tenToNineteen[arrayDollarAmount[i].substring(2)])
            } else if (arrayDollarAmount[i].substring(1, 2) == '0'){
              arrayDollarWords.push(singleDigits[arrayDollarAmount[i].substring(0, 1)] +' hundred ' + singleDigits[arrayDollarAmount[i].substring(2)])
            } else {
              arrayDollarWords.push(singleDigits[arrayDollarAmount[i].substring(0, 1)] + ' hundred ' + tensPlace[arrayDollarAmount[i].substring(1, 2)] + '-' + singleDigits[arrayDollarAmount[i].substring(2)])
            }
            console.log(arrayDollarWords);
        }
      }
    }
  }
}
