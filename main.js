

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
  }

}
