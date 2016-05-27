var singleDigits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
var tenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
var tensPlace = ['', 'teens?', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']


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

  singleDigitToWord: function (digit) {
    var singleDigits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    console.log(digit);
    if (digit.length = 1) {
      console.log(digit + " is a single digit");
      digit = singleDigits[digit]
      console.log(digit);
      return singleDigits[digit]
    }
  }

}
