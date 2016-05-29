


var singleDigits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
var tenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
var tensPlace = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']


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
  }




}
