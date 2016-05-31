//number words in arrays
var singleDigits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
var tenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
var tensPlace = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
var labels = ['', 'thousand', 'million', 'billion']
var centsFraction = centsToFraction()
var dollarWords = changeDollarArrayToWords()

//ensure amount is a string
function changeToString (amount) {
  if (typeof amount !== 'string') {
    amount = number.toString();
    return amount;
  } else {
    return 'is a string'
  }
}

// change cents to fraction with ' and ' + ' dollars'
function centsToFraction(cents) {
  var denominator = '100';
  if (cents !== '00') {
    var fraction = cents + '/' + denominator;
    return ' and ' + fraction + ' dollars';
  } else {
    return 'dollars';
  }
}

//iterate over the splitDollarAmount
function changeDollarArrayToWords (amount){
//promises?
  console.log(amount);
  if (typeof amount !== 'string') {
    amount = amount.toString();
  }
  if (amount.indexOf('.') == -1) {
    amount = amount + '.00'
  }
  var splitOnDecimal = amount.split('.')
  var splitDollarAmount = splitOnDecimal[0].split(/(?=(?:...)*$)/)
  var cents = splitOnDecimal[1]

  if (cents !== '00') {
    var fraction = cents + '/' + denominator;
    cents = ' and ' + fraction + ' dollars';
  } else {
    cents = 'dollars'
  }



  function threeDigitsToWord (threeDigits){
    if (threeDigits === '000') {
      threeDigits = ''
      return
    } else if (threeDigits.substring(0, 2) === '00') {
      threeDigits = singleDigits[threeDigits.substring(2)]
      return
    } else if (threeDigits.substring(0, 1)=== '0') {
        if (threeDigits.substring(2) === '0') {
          threeDigits = tensPlace[threeDigits.substring(1, 2)]
          return
        } else if (threeDigits.substring(1, 2) == '1'){
          threeDigits = tenToNineteen[threeDigits.substring(2)]
          return
        } else {
          threeDigits = tensPlace[threeDigits.substring(1, 2)] + '-' + singleDigits[threeDigits.substring(2)]
          return
        }
    } else {
      if (threeDigits.substring(2) === '0') {
        threeDigits = singleDigits[threeDigits.substring(0, 1)] + ' hundred ' + tensPlace[threeDigits.substring(1, 2)]
        return
      } else if (threeDigits.substring(1, 2) == '1'){
        threeDigits = singleDigits[threeDigits.substring(0, 1)] +' hundred ' + tenToNineteen[threeDigits.substring(2)]
        return
      } else if (threeDigits.substring(1, 2) == '0'){
        threeDigits = singleDigits[threeDigits.substring(0, 1)] +' hundred ' + singleDigits[threeDigits.substring(2)]
        return
      } else {
        threeDigits = singleDigits[threeDigits.substring(0, 1)] + ' hundred ' + tensPlace[threeDigits.substring(1, 2)] + '-' + singleDigits[threeDigits.substring(2)]
        return
      }
    }
  }

}

changeDollarArrayToWords('254325')

// console.log(dollarWords + cents);





//  i+.length-1 for labels
