
// power

// Write a function called power 
// which accepts a base and an exponent. 
// The function should return the power of the base to the exponent. 
// This function should mimic the functionality of Math.pow()  - 
// do not worry about negative bases and exponents
function power(base, exponent){
    if(exponent === 0){
        return 1;
    }
    return base * power(base, exponent-1);
}
console.log(power(2,3));


// factorial
// Write a function factorial which accepts a number and 
// returns the factorial of that number.
//  A factorial is the product of an integer and all the integers below it; 
//  e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  
// factorial zero (0!) is always 1.

function factorial(num){
    if(num === 0) {
        return 1;
    }
    return num * factorial(num-1);
}
console.log(factorial(7));
console.log(factorial(4));


// productOfArray
// Write a function called productOfArray 
// which takes in an array of numbers and returns the product of them all.

function productOfArray(anArr){
    if(anArr.length === 1) {
        return anArr[0];
    }
    let lastElem = anArr.pop();
    return lastElem * productOfArray(anArr);
    
}

console.log(productOfArray([1,2,3])) // 6
console.log(productOfArray([1,2,3,10])) // 60


// Write a function called recursiveRange 
// which accepts a number and adds up all the numbers from 0 to the number passed to the function 

function recursiveRange(num){
    if(num === 0){
        return 0;
    }
    return num + recursiveRange(num-1);
}
console.log(recursiveRange(6));
console.log(recursiveRange(10));


// fib
// Write a recursive function called fib 
// which accepts a number and returns the nth number in the Fibonacci sequence. 
// Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, 
//  which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}




// Write a recursive function called fib 
// which accepts a number and returns an array with n length with  the Fibonacci sequence. 
 


function fibNonRecursive(n){
    let fibArray = [1,1];
    for(let i = 2; i < n; i++){
        fibArray.push(fibArray[i-2]+fibArray[i-1]);
    }
    return fibArray;
}

function createFibArray(fibArrLength){
    let fibArray = [1,1];
    
    function fib(i){
       if(fibArray.length === fibArrLength){
        return;
       }
       fibArray.push(fibArray[i-2]+fibArray[i-1]);
       fib(i+1);
    }
    fib(2);
    return fibArray;
}

// console.log(createFibArray(10)); 
console.log(createFibArray(5));
// console.log(fibNonRecursive(10));


// reverse
// Write a recursive function called reverse which accepts a string and returns a new string in reverse.
function reverseString(aStr){
    let reversed="";
    function reverse(anArr){
        if(anArr.length === 1){
            reversed += anArr[0];
            return;
        }
        reversed += anArr.pop();
        reverse(anArr);
      }
      reverse([...aStr]);
      return reversed;
}

  console.log(reverseString('awesome')) // 'emosewa'
  console.log(reverseString('rithmschool')) // 'loohcsmhtir'

  
// isPalindrome
// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome
//  (reads the same forward and backward). 
// Otherwise it returns false.

function isPalindromeNonRecursive(aStr){
    let middleIndex = Math.floor(aStr.length / 2);
    let isPalindrome = true;
    let i = 0;
    while( i !== middleIndex && isPalindrome ){
        if(aStr[i] === aStr[aStr.length-1-i]){
            isPalindrome = true;
        } else {
            isPalindrome = false;
        }
        i++;
    }
       return isPalindrome;
}

function isPalindromeRecursive(aStr){
    let middleIndex = Math.floor(aStr.length / 2);
    let isPalindrome = true;
    let index = 0;
    function helperRecursive(i){
        if( (i === middleIndex) || (!isPalindrome)){
            return ;
        }
        if(aStr[i] === aStr[aStr.length-1-i]){
            isPalindrome = true;
        } else {
            isPalindrome = false;
        }

    helperRecursive(i+1);
    }
    helperRecursive(index);
    return isPalindrome;
}


//   console.log(isPalindromeRecursive('awesome'));
//   console.log(isPalindromeRecursive('foobar'));
//   console.log(isPalindromeRecursive('tacocat'));
//   console.log(isPalindromeRecursive('amanaplanacanalpanama'));
//   console.log(isPalindromeRecursive('amanaplanacanalpandemonium'));

// someRecursive
// Write a recursive function called someRecursive which accepts an array and a callback. 
// The function returns true if a single value in the array returns true when passed to the callback. 
// Otherwise it returns false.

function someRecursive(anArr, callback){
    let isOneTrue = false;
    let index = 0;
    function helperRecursive(i){
        
        if(isOneTrue || i > anArr.length-1){
            return true;
        } 
        isOneTrue = callback(anArr[i]);
        helperRecursive(i+1);
    }
    helperRecursive(index);
    return isOneTrue;
}

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// console.log(someRecursive([1,2,3,4], isOdd)) // true
// console.log(someRecursive([4,6,8,9], isOdd)) // true
// console.log(someRecursive([4,6,8], isOdd)) // false
// console.log(someRecursive([4,6,8], val => val > 10)); // false

// flatten
// Write a recursive function called flatten which accepts an array of arrays 
// and returns a new array with all values flattened.

function flatten(anArr){
 let flatArray = [];
 

function helperRecursive(element){
    if( !Array.isArray(element) ){
        flatArray.push(element);
    } else {
       element.forEach( el => helperRecursive(el));
    }
}
   helperRecursive(anArr);
    return flatArray;
  }
  
// console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
// console.log(flatten([[1],[2],[3]])) // [1,2,3]
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]


// capitalizeFirst
// Write a recursive function called capitalizeFirst. 
// Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst(anArray) {
    let capitalizedArray = [];
    function helperRecursive(arr){
        if(arr.length === 0){
            return capitalizedArray;
        }
        capitalizedArray.push(arr[0][0].toUpperCase()+arr[0].slice(1));
         return helperRecursive(arr.slice(1));
    }
    return helperRecursive(anArray);
}
  
console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']


// nestedEvenSum
// Write a recursive function called nestedEvenSum.
// Return the sum of all even numbers in an object which may contain nested objects.

function nestedEvenSum (anObj) {
   let objValuesArray = [];

   function helperRecursive(element){
    if(typeof element === 'number' && element % 2 === 0){
        objValuesArray.push(element);
    }
    else if(typeof element === 'object'){
        Object.values(element).forEach( el => helperRecursive(el));
    }
   }
   helperRecursive(anObj);
   return objValuesArray.reduce( (acc, current) => acc + current, 0);
  }
  
  
  var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
  
  var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };
  
  console.log(nestedEvenSum(obj1)); // 6
  console.log(nestedEvenSum(obj2)); // 10


  
// capitalizeWords
// Write a recursive function called capitalizeWords. 
// Given an array of words, return a new array containing each word capitalized.

function capitalizeWords (anArray) {
    let capitalizedArray = [];
    function helperRecursive(arr){
        if(arr.length === 0){
            return ;
        }
        capitalizedArray.push(arr[0].toUpperCase());
          helperRecursive(arr.slice(1));
    }
    helperRecursive(anArray);
    return capitalizedArray;

  }
  
  let words = ['i', 'am', 'learning', 'recursion'];
  console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']

  
// stringifyNumbers
// Write a function called stringifyNumbers which takes in an object 
// and finds all of the values which are numbers and converts them to strings. 
// Recursion would be a great way to solve this!


let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

function stringifyNumbers(anObj){
    

    
    
        Object.keys(anObj).forEach( key => {
            
            if(typeof(anObj[key]) === "number"){
                anObj[key] = anObj[key].toString();
            }
            else if(typeof(anObj[key]) === "object"){
                stringifyNumbers(anObj[key]);
            }
        })
    
     
     
    
}

stringifyNumbers(obj);
console.log(obj);


// collectStrings
// Write a function called collectStrings which accepts an object 
// and returns an array of all the values in the object that have a typeof string

const objZ = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

function collectStrings(anObj){
    let arrayOfStrings = [];
    function helperRecursive(elem){
        if(typeof elem === "string"){
             arrayOfStrings.push(elem);
        } else if(typeof elem === "object")
        Object.values(elem).forEach(el => helperRecursive(el));
    }
    helperRecursive(anObj);
    return arrayOfStrings;
}

console.log(collectStrings(objZ)); // ["foo", "bar", "baz"])