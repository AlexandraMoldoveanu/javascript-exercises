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
