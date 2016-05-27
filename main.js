var singleDigits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
var tensPlace = ['', 'teens?', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

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
    console.log(digit);
    if (digit.length = 1) {
      console.log(digit + " is a single digit");
      digit = singleDigits[digit]
      console.log(digit);
      return singleDigits[digit]
    }
  },

//branch epiphany... what if I am making this too hard. split the number into an array and .length -- to get to place values? but nope can't split a number. 

  doubleDigitToWord: function (doubleDigit) {
    console.log(doubleDigit);
    console.log(doubleDigit.split(''));

    }
  }

}
