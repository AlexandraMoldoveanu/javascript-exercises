//FREQUENCY COUNTER

//1.Write a function called Same  , which accepts 2 arrays
//it should return true if every value in array has its corresponding value squared in the second array
//the frequency of values must be the same


//implementarea naiva 0(n * n);
function same (arr1, arr2){
    const valueSquared = num => num * num;
    let result = true;
    if( arr1.length === arr2.length ){
        
        for(let i = 0; i < arr1.length; i++){
        let currentElement1 = arr1[i];
            if(arr2.indexOf(valueSquared(currentElement1)) !== -1){
                arr2.splice(arr2.indexOf(valueSquared(currentElement1)), 1)
               
            } else {
                result = false;
            }
            
        }
           
    } else {
        result = false;
    }
   
    return result;
}


//implementarea frequency counter pattern O(n)

function same2(arr1, arr2){
if(arr1.length !== arr2.length){
    return false;
}
let frequencyCounter1 = {};
let frequencyCounter2 = {};
for(let value of arr1){
    frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1;  
}
for(let value of arr2){
    frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1;  
}
for(let key in frequencyCounter1){
    if( !(key ** 2) in frequencyCounter2 ){
        return false;
    }
    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
        return false;
    }
}
return true;
}

// function areThereDuplicates() {
//     // good luck. (supply any arguments you deem necessary.)
//     let argsArray = [...arguments];
//     let frequencyCounter = {}
//     for(let elem of argsArray){
//         frequencyCounter[elem] = (frequencyCounter[elem] || 0) + 1;
//     }
//     for(let key in frequencyCounter){
//         if(frequencyCounter[key] > 1){
//             return true;
//         }
//     }
//     return false;
//   }


//impelemtare multiple pointers
  function areThereDuplicates() {
    // good luck. (supply any arguments you deem necessary.)
    let argsArray = [...arguments].sort();
    let i = 0
   for(let j = 1; j < argsArray.length; j++){
       if(argsArray[i] === argsArray[j]){
           return true;
       } 
      i += 1;
   }
   
   return false;
  }

//   function areThereDuplicates(...args) {
//     // Two pointers
//     args.sort();
//     let start = 0;
//     let next = 1;
//     while(next < args.length){
//       if(args[start] === args[next]){
//           return true
//       }
//       start++
//       next++
//     }
//     return false
//   }
//   console.log(areThereDuplicates(1, 2, 3, 4, 5, 2)) // true
//   console.log(areThereDuplicates(1, 2, 2)) // true 
//   console.log(areThereDuplicates('a', 'b', 'c', 'a'))// true 

function averagePair(arr, target){
    let start = 0;
    let end = arr.length - 1;
    while( start < end ){
        let avg = (arr[start]+arr[end])/2
        if( avg === target ) {
            return true;
        } else if( avg < target ){
            start++;
        } else {
            end--;
        }   
    }
 return false;

}

// console.log(averagePair([1,2,3],2.5)) // true
// console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
// console.log(averagePair([-1,0,3,4,5,6], 4.1)) // false
// console.log(averagePair([],4)) // false

// Multiple Pointers - isSubsequence
// Write a function called isSubsequence
// which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.
// In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.



function isSubsequence2(str1, str2){
    let stringOfMatchedCharacters = "";
    let i = 0;
    for(let char of str2){
        if(char === str1[i]){
            stringOfMatchedCharacters += char;
            if(stringOfMatchedCharacters.length < str1.length) {
                i++;
            }else if(stringOfMatchedCharacters === str1){
                return true;
            }
            else{
                return false;
            }
            
        }
    }
    return false;
    
}

// console.log(isSubsequence2('hello', 'hello world')); // true
// console.log(isSubsequence2('sing', 'sting')); // true
// console.log(isSubsequence2('abc', 'abracadabra')); // true
//  console.log(isSubsequence2('abc', 'acb')); // false (order matters)

//implementare Sliding Window Pattern


//Given an array of integers and a number, 
//write a function called maxSubarraySum, 
//which finds the maximum sum of a subarray with the length of the number passed to the function.
//Note that a subarray must consist of consecutive elements from the original array. 
//In the first example below, [100, 200, 300] is a subarray of the original array, 
//but [100, 300] is not.
function maxSubarraySum(arr, num){
let maxSum = 0;
let tempSum = 0;
if(arr.length < num) return null;
for( let i = 0; i < num; i++ ){
    maxSum += arr[i];
}
tempSum = maxSum;
for(let i = num; i < arr.length; i++){
    tempSum = tempSum + arr[i] - arr[i-num];
    maxSum = Math.max(tempSum, maxSum);
}

return maxSum;
}

// console.log(maxSubarraySum([100,200,300,400], 2));//700
// console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4));//39
// console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)); //5
// console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)); //5
// console.log(maxSubarraySum([2,3], 3)); //null

// Write a function called minSubArrayLen which accepts two parameters - 
// an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. 
// If there isn't one, return 0 instead

// function minSubArrayLen(arr, num){
//     let arrayOfLengths = [];
//     let minLength = 0;
    
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] >= num){
//         return 1;
//         }
//     }
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] + arr[i+1] >= num){
//         return 2;
//         }
//     }

//     for(let i = 0; i < arr.length; i++){
//         let tempSum = arr[i];
//         for(let j = i + 1; j <= arr.length; j++){
//             tempSum += arr[j];
//             if(tempSum >= num){
//                 arrayOfLengths.push(j);
//                 break;
//             } 
//         }
//         if( !arrayOfLengths.length ){
//             return 0;
//         }
//         return Math.min(...arrayOfLengths);
//     }
// }

//implementarea cu sliding window

function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;
   
    while (start < nums.length) {
      // if current window doesn't add up to the given sum then 
          // move the window to right
      if(total < sum && end < nums.length){
        total += nums[end];
              end++;
      }
      // if current window adds up to at least the sum given then
          // we can shrink the window 
      else if(total >= sum){
        minLen = Math.min(minLen, end-start);
              total -= nums[start];
              start++;
      } 
      // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
      else {
        break;
      }
    }
   
    return minLen === Infinity ? 0 : minLen;
  }



// console.log(minSubArrayLen([2,3,1,2,4,3], 7)); //2
// console.log(minSubArrayLen([2,1,6,5,4], 9)); //2
// console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)); //1
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)); //3
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55));//5
// console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11));//2
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95));//0


//Write a function called findLongestSubstring, 
//which accepts a string and returns the length of the longest substring with all distinct characters.

// function findLongestSubstring(str){
   
//    let tempStrArr = [str[0]];
//    let maxLength = 0;

//     if(str.length <=1){
//         return str.length;
//     }
//     for(let i = 1; i < str.length - 1; i++){
//         let currentChar = str[i];
        

//       if(tempStrArr.every( (elem) => elem !== currentChar)){
//         tempStrArr.push(currentChar);
//         maxLength = tempStrArr.length;
//       }
//       else{
//         i = ??
       
//       }
//        }

//        return maxLength;
//     }
  
  



    function areThereDuplicates(str) {
        // good luck. (supply any arguments you deem necessary.)
        let argsArray = [...str].sort();
        
        let i = 0
       for(let j = 1; j < argsArray.length; j++){
           if(argsArray[i] === argsArray[j]){
               return true;
           } 
          i ++;
       }
       
       return false;
      }


      //solutia mea - naiva
// function findLongestSubstring(str) {
   
//     let maxLength = 0;
//     let arrayOfLengths = [];
//     if (str.length <= 1) {
//         return str.length;
//     }
    
//     for(let i = 0; i < str.length; i++){
//         if(str.substring(i) < Math.max(...arrayOfLengths)){
//             return Math.max(...arrayOfLengths);
//         }
//         let substr = "";
//         for(let j = i; j <= str.length; j++){
//             substr += str[j];
//             if( !areThereDuplicates(substr) ){
//                 maxLength = substr.length;
//             } 
//             else {
//                 arrayOfLengths.push(maxLength);
//                 break;
//             }
//         }
        
//     }
//     return Math.max(...arrayOfLengths);
// }


//solutia cu sliding window pattern
function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;
   
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (seen[char]) {
        start = Math.max(start, seen[char]);
      }
      // index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1);
      // store the index of the next char so as to not double count
      seen[char] = i + 1;
    }
    return longest;
  }
// console.log(findLongestSubstring('')); //0
// console.log(findLongestSubstring('rithmschool'));//7
// console.log(findLongestSubstring('thisisawesome'));//6 ==awesom
// console.log(findLongestSubstring('thecatinthehat'));//7 hecatin
// console.log(findLongestSubstring('bbbbbb'));//1
// console.log(findLongestSubstring('longestsubstring'));//8 ubstring
// console.log(findLongestSubstring('thisishowwedoit'));//6 wedoit

arr.reduce()


function productOfArray(arr){
    if(arr.length === 1) return arr[0];
    let lastElem = arr.pop();
    let result = lastElem * productOfArray(arr);
    return result;
}

// console.log(productOfArray([2,4,3]))// 24
// console.log(productOfArray([1,2,3,10])) // 60


// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. 
// Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ...
//  which starts with 1 and 1, 
// and where every number thereafter is equal to the sum of the previous two numbers.
// let fibArr = [1,1];
// function fib(num){
//     if(fibArr.length === num) {
//         return fibArr[length-1];
//     }  
//     fibArr.push((fibArr[fibArr.length-1] + fibArr[fibArr.length-2]));

//     return fib(num, fibArr);
// }

function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}


// console.log(fib(4));
// console.log(fib(10));
// console.log(fib(28));
// console.log(fib(35));


function binarySearch1(arr, value){
    let start = 0;
    let end = arr.length-1;
    let middle =  Math.floor((start + end)/ 2);
    while(arr[middle] !== value && start <= end ){
        
       if( value < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle =  Math.floor((start + end)/ 2);
    } 
    if(arr[middle] === value){
        return middle;
    } else{
        return -1;
    }
  
  return -1;
}


function binarySearch(arr, value){
    let start = 0;
    let end = arr.length-1;
    let middle =  Math.floor((start + end)/ 2);
    while(arr[middle] !== value && start <= end ){
        
       if( value < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle =  Math.floor((start + end)/ 2);
    } 
    if(arr[middle] === value){
        return middle;
    } else{
        return -1;
    }
  //sau cu turnary opertor
  //return arr[middle] === value ? middle : 1;

}
// console.log(binarySearch([1,2,3,4,5],2));
// console.log(binarySearch([1,2,3,4,5],5));

//String search 
//suppose you want to count the number of times a smaller string appears in a longer string
 function countSubstring(long, short){
    let counter = 0;
    
    for(let i = 0; i < long.length; i++ ) {
        for(let j = 0; j < short.length; j++){
            if(short[j] !== long[i+j]){
                break;
            } 
            if(j === short.length - 1){
                counter ++;
            }  
        }
    }
   
    return counter;
 }

 function countSubstring2 (longString,subString){
    let count = 0;
    let startIndex = 0;
  
    while (true) {
      const index = longString.indexOf(subString, startIndex);
  
      if (index === -1) {
        break;
      }
  
      count++;
      startIndex = index + subString.length;
    }
  
    return count;
  }
 //console.log(countSubstring2("wolomglalomjlomg", "omg"));

//bubble sort

function bubbleSort(arr){
    let noSwaps;
    for(let i = arr.length; i > 0; i--){
        noSwaps = true;
        for(let j = 0; j < i-1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                noSwaps = false;
            }
        }
        if(noSwaps){
            break;
        }
    }
    return arr;
} 

function selectionSort(arr){
    
    for(let i = 0; i < arr.length; i++){
        let lowest = i;
       for(let j = i+1; j < arr.length; j++){
        if(arr[j] < arr[lowest]){
            lowest = j;
        }
       }
       if( i !== lowest ){
        [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
       }
       
    }
    
 return arr;
}

function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--){
            arr[j+1] = arr[j];
          
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

console.log(insertionSort([2,1,9,76,4]));


function reverse(str){
    let strArr = [...str];
    let reversedString = "";
    function recursive(arr){
        if(arr.length === 0){
            return reversedString
        };
        reversedString+= arr.pop();
        recursive(strArr);
    }
   
      recursive(strArr);
     return reversedString;
}


// function reverse(str){
// 	if(str.length <= 1) return str;
// 	return reverse(str.slice(1)) + str[0];
// }
//console.log(reverse('awesome'))  // 'emosewa'



let fibArr = [1,1];
function fib(num){
    if(fibArr.length === num) {
        return fibArr[num-1];
    }  
    fibArr.push((fibArr[fibArr.length-1] + fibArr[fibArr.length-2]));

    return fib(num);
}

//console.log(fib(35)) // 9227465