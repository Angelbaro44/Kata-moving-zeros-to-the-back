//This is an algorithm that takes an array and moves all of the zeros 
//to the end, preserving the order of the other elements.


var moveZeros = function (arr) {
      let zArr=[],newArr=[];
      arr.forEach(x => x===0?zArr.push(x):newArr.push(x))
      return newArr.concat(zArr)
      }
      