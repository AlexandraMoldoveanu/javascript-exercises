const fibonacci = function(num) {
    if(num < 0){
        return "OOPS";
    }
let fibonacciArray = [1,1];
let currentNum;
for(let i = 2; i < num; i++){
currentNum = fibonacciArray[i-2] + (fibonacciArray[i-1]);
fibonacciArray.push(currentNum);
}
return fibonacciArray[num-1];
};

//  Do not edit below this line
 module.exports = fibonacci;
