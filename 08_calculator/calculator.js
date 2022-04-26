const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

// const sum = function(anArray) {
// 	let result = 0;
//   for(let i = 0; i < anArray.length; i++){
//     result += anArray[i];
//   }
//   return result;
// };

const sum = function(anArray) {
  return anArray.reduce( (partialSum, nextNumber) => partialSum + nextNumber, 0);
}
const multiply = function(anArray) {
  return anArray.reduce( (partialProduct, nextNumber) => partialProduct * nextNumber, 1);
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
  let result = 1;
	if (num === 0){
    return 1;
  }
  for(let i = 1; i <= num; i++){
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
