

module.exports = {

  changeFromString: function (number) {
    console.log(typeof number);
    if (typeof number === 'string') {
      number = parseInt(number, 10);
      console.log(number);
      console.log(typeof number);
      return number;
    } else {
      console.log(number + " is Not a string");
      return 'not a string'
    }
  },

  singleDigitToWord: function (digit) {
    var singleDigits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    if (digit.length === 1) {
      console.log(digit + 'is a single digit');
      digit = singleDigits[digit]
      return singleDigits[digit]
    }
  }

}
