
var outerArray = [];
var innerArray  = [];

module.exports = {

  inputToArray: function (input) {
    var numberArray = [];
    for (var i=0; i<=input; i++){
      numberArray.push(i)
    }
  },

  numberOfInnerArrays: function(input){
    return Math.round(Math.sqrt(input).toFixed(1));
  },

  matrixStructure: function(input){
    var outerArray = [];
    for (var i = 1; i <= this.numberOfInnerArrays(input); i++) {
      outerArray.push([])
    }
    return outerArray
  },

  zeroIndex: function(input) {
    var zeroArrayIndex = Math.ceil(this.numberOfInnerArrays(input)/2)-1;
    console.log(zeroArrayIndex);
    return zeroArrayIndex
  }


//define zeroArray: var zeroArray = [0]


//instantiate matrix: var matrix = [zeroArray]

//initial array: if i is less than 2 push i into currentArray [0, 1]

//add newArray in matrix when lastArray.length = matrix.length+1
  //push odd matrix.length and unshift even to add new array>? or rotate push, unshift, push, unshift
// var innerArray = new Array('')
//when matrix.length is even, then unshift into newLastArray until newLastArray.length = zeroArray.length+1

//then unshift matrix.length

//when do you turn? currentArray.length <= nextArray.length push i in currentArray


}
