const reverseString = function(aStr) {
let splitArray = aStr.split('');
let reversedString = '';
console.log(splitArray);
for(let i = splitArray.length-1; i >= 0  ; i--){
    reversedString += splitArray[i];
    
}
return reversedString;
};

// Do not edit below this line
module.exports = reverseString;


// Write a function that takes an array of strings as input 
//and returns a new array containing only the strings with more than five characters.
 const filterArray = function(arrOfStrings) {
    return arrOfStrings.filter( str => str.length > 5);
 }

 //Create a function that takes two numbers as arguments and 
 //returns the greatest common divisor (GCD) of those numbers. 
 //The GCD is the largest positive integer that divides both numbers without leaving a remainder.
 const getGreatestCommonDivisor = function(num1, num2) {
    let num1Divisors = [num1];
    let num2Divisors = [num2];
  
    for (let i = 1; i <= num1 / 2; i++) {
      if (num1 % i === 0) {
        num1Divisors.push(i);
      }
    }
  
    for (let i = 1; i <= num2 / 2; i++) {
      if (num2 % i === 0) {
        num2Divisors.push(i);
      }
    }
  
    let commonDivisors = [];
  
    for (let i = 0; i < num1Divisors.length; i++) {
      if (num2Divisors.includes(num1Divisors[i])) {
        commonDivisors.push(num1Divisors[i]);
      }
    }
  
    if (commonDivisors.length === 0) {
      return -1; // No common divisor found
    }
  
    return Math.max(...commonDivisors);
  };


  // Given an array of numbers, write a function that finds the two largest numbers in the array 
  //and returns them in descending order.

//   const descendingArr = function(anArr){

//     let firstMax = Math.max(...anArr);
//     let indexOfFirstMax = anArr.indexOf(firstMax);
//     let slicedArr = anArr.slice(0, indexOfFirstMax).concat(anArr.slice(indexOfFirstMax+1));
//     let secondMax = Math.max(...slicedArr);
//     return [firstMax, secondMax];
//   }

const descendingArr = function(anArr) {
    anArr = anArr.sort(function(a, b){
        if(a - b < 0){
            return 1;
        }
        else if(a - b > 0){
            return -1;
        } else {
            return 0;
        }
    });
    return[anArr[0], anArr[1]];
}
