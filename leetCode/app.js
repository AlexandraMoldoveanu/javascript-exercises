//1.Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.

let addToArrayForm = function (num, k) {
    let joinedArray = parseInt(num.join(""));
    let sum = joinedArray + k;

    let numToString = sum.toString();

    let arrayForm = numToString.split("");

    let result = [];
    for (let i = 0; i < arrayForm.length; i++) {
        result.push(Number(arrayForm[i]))
    }
    return result;
};

// example  
//Input: num = [1,2,0,0], k = 34
//Output: [1,2,3,4]
addToArrayForm([1, 2, 0, 0], 34);


//2. You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. 
//If this is impossible, return -1.

// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */
function hasAnyFreshOranges(grid) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                return true;
            }
        }
    }
    return false;
}

function getRottenOrangesCoordinates(grid) {
    let coordinates = [];
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 2) {
                coordinates.push([i, j]);
            }
        }
    }
    return coordinates;
};


let orangesRotting = function (grid) {
    let timeElapsed = 0;
    let numOfLines = grid.length;
    let numOfColumns = grid[0].length;

    while (timeElapsed < numOfLines * numOfColumns && hasAnyFreshOranges(grid)) {
        let rottenCoordinates = getRottenOrangesCoordinates(grid);
        for (let i = 0; i < rottenCoordinates.length; i++) {
            let x = rottenCoordinates[i][0];
            let y = rottenCoordinates[i][1];
            if (y + 1 < numOfColumns && grid[x][y + 1] === 1) {
                grid[x][y + 1] = 2;
            }
            if (y - 1 >= 0 && grid[x][y - 1] === 1) {
                grid[x][y - 1] = 2;
            }
            if (x - 1 >= 0 && grid[x - 1][y] === 1) {
                grid[x - 1][y] = 2;
            }
            if (x + 1 < numOfLines && grid[x + 1][y] === 1) {
                grid[x + 1][y] = 2;
            }
        }

        timeElapsed++;

    }
    if (timeElapsed === numOfLines * numOfColumns) {
        return -1;
    }
    return timeElapsed;
};

orangesRotting([[1, 2]]);

//Input: grid = [
//              [1,1,1],
//              [1,1,0],
//              [0,1,1]]
//Output: 4



//3.Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). 
//You may return the answer in any order.
//Input: words = ["bella","label","roller"]
//Output: ["e","l","l"]
//Input: words = ["cool","lock","cook"]
//Output: ["c","o"]

let hasCommonChar = function (char, array) {
    return array.every(word => {
        return word.includes(char);
    })
}
let removeCommonCharacter = function (char, array) {
    for (let i = 0; i < array.length; i++) {
        let modifiedWord = array[i].replace(char, "");
        array[i] = modifiedWord;
    }
    return array;
}
hasCommonChar("b", ["bella", "label", "roller"]);
removeCommonCharacter("b", ["bella", "label", "roller"]);


let commonChars = function (words) {
    let commonCharacters = [];
    let firstWord = words[0];

    for (let i = firstWord.length-1; i >= 0; i--) {
        let currentChar = firstWord[i];
        if (hasCommonChar(currentChar, words)) {
            commonCharacters.push(currentChar);
            words = removeCommonCharacter(currentChar, words);
        }
    }
    return commonCharacters;
};
// console.log(commonChars(["bella", "label", "roller"]));
// console.log(commonChars(["cool", "lock", "cook"]));


// 4.The sum of the squares of the first ten natural numbers is,

// 12 + 22 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.

function sumSquareDifference(n) {
    let sumOfSquares = 0;
    let sum = 0;
    let squareSum = 0;
    for(let i = 1; i <= n; i++){
        sumOfSquares += Math.pow(i, 2);
        
    }
        for(let i = 1; i <=n; i++){
        sum += i;
    }
    squareSum = Math.pow(sum, 2);

    return  squareSum - sumOfSquares;
  }
  
//   console.log(sumSquareDifference(10));

// 5.By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the nth prime number?
function nthPrime(n) {
    let primes = [];
    let i = 2;
    while( primes.length < n){
        if( checkIfPrime(i) ){
            primes.push(i);
        }
        i++;
    }
    
    return primes[primes.length-1];
  }

  function checkIfPrime(num){
    let isPrime = true;
    for(let i = 2; i<= num/2; i++){
        if(num % i === 0){
            isPrime = false;
             break;
        }
    }
    return isPrime;
  }

//   console.log(nthPrime(1000));
  function primeSummation(n) {
    let primes = [];
    let sum = 0;
    for(let i = 2; i < n; i++){
        if(checkIfPrime(i)){
            primes.push(i);
            sum+=i;
        }
    }
   
    return sum;
    // const initialValue = 0;
    // const sumWithInitial = primes.reduce(
    //   (previousValue, currentValue) => previousValue + currentValue,
    //   initialValue
    // );
    // return sumWithInitial;
  }
  
//   console.log(primeSummation(17));

// Problem 12: Highly divisible triangular number
// The sequence of triangle numbers is generated by adding the natural numbers.
// So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28.
// The first ten terms would be:
// 1, 3, 6, 10, 15, 21, 28, 36, 45, 55
//We can see that 28 is the first triangle number to have over five divisors.
//What is the value of the first triangle number to have over n divisors?

function divisibleTriangleNumber(n) {
  
  let numberToCheck;
  let numOfDivisors = 0;
  let i = 1;
  while(numOfDivisors < n){
    numberToCheck = generateTriangularNumbers(i);
    numOfDivisors = getNumberOfDivisors(numberToCheck);
    i++;
  }
  return numberToCheck;
}

function generateTriangularNumbers(num){
   let triangularNumber = num*(num+1)/2;
   return triangularNumber;
}
function getNumberOfDivisors(num){
    let count = 0;
    for(let i = 1; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            count+=2;
        }
    }
    return count;
}
// console.log(divisibleTriangleNumber(167));

// Problem 14: Longest Collatz sequence
// The following iterative sequence is defined for the set of positive integers:

// n → n/2 (n is even)
// n → 3n + 1 (n is odd)
// Using the rule above and starting with 13, we generate the following sequence:

// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms.
//Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

// Which starting number, under the given limit, produces the longest chain?

// Note: Once the chain starts the terms are allowed to go above limit

function longestCollatzSequence(limit) {
    let currentNum;
    let currentNumLengthOfChain = 0;;
    for (let i = 1; i <= limit; i++) {
        let chain = [i];
        let num = i;
        while (num !== 1) {
            if (num % 2 === 0) {
                num = num / 2;
            } else {
                num = 3 * num + 1;

            }
            chain.push(num);
        }
        if (chain.length > currentNumLengthOfChain) {
            currentNumLengthOfChain = chain.length;
            currentNum = i;
        }
    }
    return currentNum;
}

//   console.log(longestCollatzSequence(1000000))

function powerDigitSum(exponent) {
    let result  = Math.pow(2,exponent);
    // let numsArray = Array.from(String(result), Number);
    // const sum = numsArray.reduce( (acc, currentVal) =>  {return acc + currentVal} );
    // return sum;
    
    let sum = 0;
    while( result > 0){
        sum += result % 10;
        result = Math.floor(result / 10);
        console.log(result);
    }
    return sum;
}
    
//  console.log(powerDigitSum(128));

//-----------------------------------------------------
// Problem 15.You are given an array of integers stones where stones[i] is the weight of the ith stone.

// We are playing a game with the stones. 
//On each turn, we choose the heaviest two stones and smash them together. 
//Suppose the heaviest two stones have weights x and y with x <= y. 
//The result of this smash is:
// If x == y, both stones are destroyed, and
// If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
// At the end of the game, there is at most one stone left.

// Return the weight of the last remaining stone. If there are no stones left, return 0.

let stones = [2,7,4,1,8,1];

let lastStoneWeight = function(stones) {
    let stonesClone = [...stones];
    let heaviestFirst;
    let heaviestSecond;
    let difference;
    while( stonesClone.length > 1){
        //get the heaviest first stone
    
        heaviestFirst = Math.max(...stonesClone);
        //remove it from the array
        stonesClone.splice(stonesClone.indexOf(heaviestFirst), 1);

         //get the heaviest second stone from the modified array
        heaviestSecond = Math.max(...stonesClone);
        //remove it from the array
        stonesClone.splice(stonesClone.indexOf(heaviestSecond), 1);


        difference =  heaviestFirst - heaviestSecond;
        if(difference !== 0){
            stonesClone.push(difference);
        }
    }
    if(stonesClone.length === 1){
        return stonesClone[0];
    } 
    return 0;
}
// console.log(lastStoneWeight(stones));

//pROBLEM 20.You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

//We repeatedly make duplicate removals on s until we no longer can.

//Return the final string after all such duplicate removals have been made. 
//It can be proven that the answer is unique.

 

// xample 1:

// Input: s = "abbaca"
// Output: "ca"
// Explanation: 
// For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, 
//and this is the only possible move.  The result of this move is that the string is "aaca", 
//of which only "aa" is possible, so the final string is "ca".
// Example 2:

// Input: s = "azxxzy"
// Output: "ay"E
let removeDuplicates = function(s) {
    const stack = [];
	for (let i = 0; i < s.length; i++) {
		const cv = s[i];
		const top = stack[stack.length - 1];

		// if last element is same as current pop off from stack
		if (cv === top) stack.pop();
		else stack.push(cv); // if not equal, add to stack
	}

	return stack.join('');
}

// console.log(removeDuplicates("aababaab"));

const testTriangle =   [[3, 0, 0, 0],
                        [7, 4, 0, 0],
                        [2, 4, 6, 0],
                        [8, 5, 9, 3]];

const numTriangle = [
[75],
[95, 64],
[17, 47, 82],
[18, 35, 87, 10],
[20, 04, 82, 47, 65],
[19, 01, 23, 75, 03, 34],
[88, 02, 77, 73, 07, 63, 67],
[99, 65, 04, 28, 06, 16, 70, 92],
[41, 41, 26, 56, 83, 40, 80, 70, 33],
[41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
[53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
[70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
[91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
[63, 66, 04, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
[04, 62, 98, 27, 23, 09, 70, 98, 73, 93, 38, 53, 60, 04, 23]
]

function maximumPathSumI(triangle) {
    let sum = 0;
    let highestAdjacent = 0;
    let indexOfHighestAdjacent;
    
    for(let i = 0; i < triangle.length; i++){
        let adjacents = [];
        let row = triangle[i];
        //if i am on the first row
        if(highestAdjacent === 0){
            highestAdjacent = Math.max(...row); 
            indexOfHighestAdjacent = row.indexOf(highestAdjacent);
            console.log(indexOfHighestAdjacent);
        } 
       //check adjacents indexes
        else {
            //check if adjacents to the bottom left
            if(row[indexOfHighestAdjacent-1]){
                adjacents.push(row[indexOfHighestAdjacent-1]);
            }
            //check if adjacents to the bottom straight
            adjacents.push(row[indexOfHighestAdjacent]);
            //check if adjacents to the bottom right
            if(row[indexOfHighestAdjacent+1]){
                adjacents.push(row[indexOfHighestAdjacent+1]);
            }
            // adjacents.push(indexesOfHighestAdjacents[0][indexesOfHighestAdjacents[1]+1]);
            console.log(adjacents);
            highestAdjacent = Math.max(...adjacents);
            indexOfHighestAdjacent = row.indexOf(highestAdjacent);
        }
        sum += highestAdjacent;
         
    }
    return sum;
}
  
  
  
//  console.log(maximumPathSumI(numTriangle));

//Given an array of integers nums and an integer target, 
//return indices of the two numbers such that they add up to target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//You can return the answer in any order.

let twoSum = function(nums, target) {
    for( let i = 0; i < nums.length; i++){
        let currentNum = nums[i];
        for( let j = i+1; j < nums.length; j++){
            let secondNum = nums[j];
            if(currentNum + secondNum === target){
                return [i, j];
            }
        }
    }
};

// console.log(twoSum([2,5,5,11], 10));

// 14. Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string ""
let longestCommonPrefix = function(strs) {
    let prefix = '';
    for(let i = 1; i <= strs[0].length; i++){
        prefix = strs[0].substring(0, i);
       let isPrefixCommon = strs.every(string => {
            return string.substring(0,i) === prefix;
        });
        if(!isPrefixCommon){
            return prefix.substring(0, prefix.length-1);
        }
    };
    return prefix;
    }
    



// console.log(longestCommonPrefix(["flower","flower","flower","flower"]));

// Problem 20: Factorial digit sum
// n! means n × (n − 1) × ... × 3 × 2 × 1

// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

// Find the sum of the digits n!

function sumFactorialDigits(n) {
    let sum = 0;
    let factorial = BigInt(1);
    for(let i = BigInt(1); i <= n; i++){
        factorial *= i;
    }
    let factorialArray =[...factorial.toString()];
    for(let i = 0; i < factorialArray.length; i++){
        sum += parseInt(factorialArray[i]);
    }
    return sum;
  }
  
//   console.log(sumFactorialDigits(25));



//20. Valid Parentheses
// Easy
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
//  determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

const isValid = function(string) {
    let stringArray = [...string];
    let stack = [];
    for(let i = 0; i < stringArray.length; i++){
        if( stringArray[i] === "(" ||  stringArray[i] === "[" || stringArray[i] === "{"){
            stack.push(stringArray[i]);
        }
        else if(stringArray[i] === ")"){
            if(stack[stack.length-1] === "("){
                stack.pop(stack[stack.length-1]);
            } else {return false};
        }
        else if(stringArray[i] === "]"){
            if(stack[stack.length-1] === "["){
                stack.pop(stack[stack.length-1]);
            } else {return false};
        }
        else if(stringArray[i] === "}"){
            if(stack[stack.length-1] === "{"){
                stack.pop(stack[stack.length-1]);
            } else {return false};
        }
    }
    if( stack.length === 0){
        return true;
    } else { return false}
};

// console.log(isValid("["));

// Problem 21: Amicable numbers
// Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).

// If d(a) = b and d(b) = a, where a ≠ b, 
//then a and b are an amicable pair and each of a and b are called amicable numbers.

// For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

// Evaluate the sum of all the amicable numbers under n.
function sumDivisors(num){
    let sum = 0;
    for(let i = 0; i <= num/2; i++){
        if(num % i === 0){
            sum += i;
        }
    }
    return sum;
}
function sumAmicableNum(n) {
    let arrayOfAmicableNums = [];
    let sumOfAmicableNums = 0;
    
    for(let i = 1; i < n; i++){
        let firstSum = sumDivisors(i);
        let secondSum = sumDivisors(firstSum);
        if(i === secondSum && firstSum !== secondSum ){
            if(arrayOfAmicableNums.length === 0){
                arrayOfAmicableNums.push(i);
                arrayOfAmicableNums.push(firstSum);
                sumOfAmicableNums += i + firstSum;
            }
            if( arrayOfAmicableNums.indexOf(i) === -1 && arrayOfAmicableNums.indexOf(firstSum) === -1){
                arrayOfAmicableNums.push(i);
                arrayOfAmicableNums.push(firstSum);
                sumOfAmicableNums += i + firstSum;
            }
           
        }
    }
    return sumOfAmicableNums;
  }
  
// console.log(sumAmicableNum(5000));


let last = {
    data: 4,
    next: null
};
let second = {
    data: 2 ,
    next: null
}
let first = {
    data: 1,
    next: null
}
first.next = second;
second.next = last;


let current = first;
while (current !== null)
{
    current = current.next;
}

// 27. Remove Element

// Given an integer array nums and an integer val, 
// remove all occurrences of val in nums in-place. The relative order of the elements may be changed.
// Do not allocate extra space for another array. 
// You must do this by modifying the input array in-place with O(1) extra memory.

let removeElement = function(nums, val) {
    for(let i = nums.length-1; i >= 0; i--){
        let index = nums.indexOf(val);
        if(index !== -1){
            nums.splice(index,1);
        }
    }
    return nums;

};

// console.log(removeElement([3,2,2,3],3))

//35. Search Insert Position
// Given a sorted array of distinct integers and a target value, return the index if the target is found.
//  If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

var searchInsert = function(nums, target) {
    let leftIndex = 0;
    let rightIndex = nums.length-1;
    let middleIndex;
    while( leftIndex <= rightIndex ){
         middleIndex = Math.floor( (leftIndex + rightIndex) / 2);
        if(target === nums[middleIndex]){
            return middleIndex;
        }
        if(target < nums[middleIndex]){
            rightIndex = middleIndex-1;
        } else {
            leftIndex = middleIndex+1;
        }
    }
    if(leftIndex > rightIndex){
        return leftIndex;
    }
    return middleIndex;
};
// console.log(searchInsert([1,3,5,6], 9));


// Problem 22: Names scores
// Using names, an array defined in the background containing over five-thousand first names, 
//begin by sorting it into alphabetical order. 
//Then working out the alphabetical value for each name, 
//multiply this value by its alphabetical position in the list to obtain a name score.

// For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53,
// is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

// What is the total of all the name scores in the array?
function namesScores(arr) {
    //generate an alphabet array
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x));
    
    //sort the array of names alphabetically
    arr.sort( (a, b) => a.localeCompare(b));

    let namesScores = 0;
    arr.forEach( name => {
       
       let nameScore = 0;
       let nameAlphabeticalValue = 0;
        for(let i = 0; i < name.length; i++){
            
            let nameLetter = name[i];
            // console.log(alphabet.indexOf(nameLetter) + 1);
            nameAlphabeticalValue += alphabet.indexOf(nameLetter) + 1;
        }
        nameScore = nameAlphabeticalValue * (arr.indexOf(name) + 1);
        namesScores += nameScore;
    });
    
    return namesScores;
  }
  
  // Only change code above this line
  const test1 = ['THIS', 'IS', 'ONLY', 'A', 'TEST'];
  const test2 = ['I', 'REPEAT', 'THIS', 'IS', 'ONLY', 'A', 'TEST'];
  
  
//   console.log(namesScores(test2));

// Problem 24: Lexicographic permutations
// A permutation is an ordered arrangement of objects. 
// For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. 
// If all of the permutations are listed numerically or alphabetically, we call it lexicographic order.
//  The lexicographic permutations of 0, 1 and 2 are:

// 012   021   102   120   201   210
// What is the nth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?

  const getPermutations = arr => {

    const output = [];
  
    const swapInPlace = (arrToSwap, indexA, indexB) => {
      const temp = arrToSwap[indexA];
      arrToSwap[indexA] = arrToSwap[indexB];
      arrToSwap[indexB] = temp;
    };
  
    const generate = (n, heapArr) => {
      if (n === 1) {
        output.push(heapArr.slice());
        return;
      }
  
      generate(n - 1, heapArr);
  
      for (let i = 0; i < n - 1; i++) {
        if (n % 2 === 0) {
          swapInPlace(heapArr, i, n - 1);
        } else {
          swapInPlace(heapArr, 0, n - 1);
        }
  
        generate(n - 1, heapArr);
      }
    };
  
    generate(arr.length, arr.slice());
  
    return output;
  };

  function arrayOfSortedNums(arrayOfArrays){
    let newArr = [];
    arrayOfArrays.forEach( arr => {
        //make the array a string
        arr = arr.join('');
        newArr.push(+arr);
    })
    return newArr.sort( (a,b) => {return a-b});
  }

  function getSpecficPermutation(array, n){
    return array[n];
  }

  let perms = getPermutations([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  let transformedArray = arrayOfSortedNums(perms);
//   console.log( getSpecficPermutation(transformedArray, 899999))
//   ;


// Problem 23: Non-abundant sums
// A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. 
// For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28,
//  which means that 28 is a perfect number.

// A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

// As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, 
// the smallest number that can be written as the sum of two abundant numbers is 24. 
//  it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. 
//  However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

// Find the sum of all positive integers <= n which cannot be written as the sum of two abundant numbers.

function getDivisors(num){
    let divisors = [];
    if(num === 1){
        divisors.push(num);
    }
    for(let i = 1; i <= num/2; i++){
        if(num % i === 0){
            divisors.push(i);
        }
    }
    return divisors;
}

function isNumAbundant(n){
    let divisors = getDivisors(n);
    let sumOfDivisors = divisors.reduce( (acc, current) => {
    return acc+current;
})
    if(sumOfDivisors > n){
        return true;
    }
    else{
        return false;
    }
}
function sumOfNonAbundantNumbers(n) {
   //first get all abundant numbers < n
   let abundantNums = [];
   let cannotBeWrittenAsSumOfAbundandNums = [];
   for(let i = 1; i <= n; i++){
    if(isNumAbundant(i)){
        abundantNums.push(i);
    }
   }
   console.log(abundantNums);

   //then test each number < n to see if it can be written as a sum of abundant numbers
   for(let i = 1; i <= n; i++){
    let isWrittenAsSum = false;
    //loop through the abundant numbers
    for(let j = 0; j <= i; j++){
        let result = i - abundantNums[j];
        if( abundantNums.indexOf(result) !== -1 ){
             isWrittenAsSum = true;
        }
    }
    if(!isWrittenAsSum){
        cannotBeWrittenAsSumOfAbundandNums.push(i);
    }
   }
   console.log(cannotBeWrittenAsSumOfAbundandNums);
   return cannotBeWrittenAsSumOfAbundandNums.reduce( (acc, currentVal) =>  acc+currentVal);
  }
  
// console.log(sumOfNonAbundantNumbers(15000));

// 58. Length of Last Word

// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

const lengthOfLastWord = function(s) {
    let arr = s.split(' ');
    console.log(arr);
    for(let i = arr.length-1; i >= 0; i--){
        let lastWord = arr[i];
        if(lastWord.length > 0){
            return lastWord.length;
        }
    }
};

// console.log(lengthOfLastWord("a"));

// 66. Plus One

// You are given a large integer represented as an integer array digits,
//  where each digits[i] is the ith digit of the integer. 
//  The digits are ordered from most significant to least significant in left-to-right order. 
//  The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.




let plusOne = function(digits) {
       if(digits.length === 1 && digits[0] === 0){
        return [1];
       }
            let index = digits.length-1;
            while( digits[index] === 9){
                digits[index] = 0;
                if(index === 0){
                    break;
                }
                index-- ;
                
            }
            if(index === 0 ){
                if(digits[index] === 0){
                    digits.unshift(1);
                } else {
                    digits[index] ++;
                } 
            }  
            else {
                digits[index] ++;
            }   
    
    return digits;

}
// console.log(plusOne([2]));
// console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))

var mySqrt = function(x) {
    if( x < 2 ){
        return x;
    }
    for(let i = 1; i <= x; i++){
        if( Math.pow(i,2) === x){
            return i;
        } else {
            if(Math.pow(i,2) > x){
                return i-1;
            }
        }
    }
    
};
// console.log(mySqrt(2));

// Problem 29: Distinct powers
// Consider all integer combinations of  ab  for 2 ≤ a ≤ 5 and 2 ≤ b ≤ 5:

// 22=4, 23=8, 24=16, 25=32
// 32=9, 33=27, 34=81, 35=243
// 42=16, 43=64, 44=256, 45=1024
// 52=25, 53=125, 54=625, 55=3125
// If they are then placed in numerical order, with any repeats removed, 
//we get the following sequence of 15 distinct terms:

// 4, 8, 9, 16, 25, 27, 32, 64, 81, 125, 243, 256, 625, 1024, 3125
// How many distinct terms are in the sequence generated by  ab  for 2 ≤ a ≤ n and 2 ≤ b ≤ n?

function distinctPowers(n) {
    let powerArray = [];
    for(let a = 2; a <= n; a++){
        for(let b = 2; b <= n; b++){
            powerArray.push(Math.pow(a,b));
        }
    }
     powerArray.sort( (a,b) => a-b);
     return powerArray.filter( (item, currentIndex) => powerArray.indexOf(item) === currentIndex).length;
    // return [...new Set(powerArray)].length;
    
  }
  
//   console.log(distinctPowers(15));

// class MyPromise {
//     constructor(executor){
//         executor(this.resolve,this.reject);
//     }

//     then(callback){
//         this.successCallback = callback;
//         return this;
//     }

//     resolve(){
//         if (this.successCallback){
//             this.successCallback(...arguments);
//         }
//     }
//     reject(){
//         if (this.errorCallback){
//             this.errorCallback(...arguments);
//         }
//     }

//     catch(callback){
//         this.errorCallback = callback;
//         return this;
//     }
// }


// 70. Climbing Stairs
// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
// let climbStairs = function(n) {
//     let arrayOfWays = [];
    
//     while(n > 1){
//         n = n / 2;
//         arrayOfWays.push(2);
//     }
//     if(n === 1){
//         arrayOfWays.push(1);
//     }
//     let numberOfPerms = getPermutationsII(arrayOfWays).length + 1;
//     return numberOfPerms;
// };
// let getPermutationsII = arr => {

//     const output = [];
  
//     const swapInPlace = (arrToSwap, indexA, indexB) => {
//       const temp = arrToSwap[indexA];
//       arrToSwap[indexA] = arrToSwap[indexB];
//       arrToSwap[indexB] = temp;
//     };
  
//     const generate = (n, heapArr) => {
//       if (n === 1) {
//         output.push(heapArr.slice());
//         return;
//       }
  
//       generate(n - 1, heapArr);
  
//       for (let i = 0; i < n - 1; i++) {
//         if (n % 2 === 0) {
//           swapInPlace(heapArr, i, n - 1);
//         } else {
//           swapInPlace(heapArr, 0, n - 1);
//         }
  
//         generate(n - 1, heapArr);
//       }
//     };
  
//     generate(arr.length, arr.slice());
  
//     return output;
//   };

// console.log(climbStairs(4));
// console.log(getPermutationsII([1,2,2,2]).length);

// Write a function called arrayFrom which converts an array-like-object into an array.

// Examples:
//     var divs = document.getElementsByTagName('divs');
//     divs.reduce // undefined
//     var converted = arrayFrom(divs);
//     converted.reduce // function(){}....
// */

let divs = document.getElementsByTagName('div');
function arrayFrom(arrayLikeObject){
    let converted = [].slice.apply(arrayLikeObject);
    return converted;
}
// console.log(arrayFrom(divs));

/* 
// Write a function called sumEvenArguments which takes all of the arguments passed to a function and returns the sum of the even ones.

Examples:
    sumEvenArguments(1,2,3,4) // 6
    sumEvenArguments(1,2,6) // 8
    sumEvenArguments(1,2) // 2
*/
function sumEvenArguments(){
     let convertToArray = [].slice.call(arguments); //arguments.slice()
    let initial = 0;
return convertToArray.reduce( (acc, currentValue) => {
   if( currentValue % 2 === 0 ){
    return acc + currentValue;
   }
   return acc;   
    
}, initial)

}
//  console.log(sumEvenArguments(1,2,3,4));

function invokeMax(fn, maxAmount){
    let max = 0;
    return function(){
        if (max >= maxAmount){
            return "All maxed out";
        }
        max++;
        return fn.apply(this, arguments);
    }
}
function add(a,b){
    return a+b;
}
var addThreeTimes = invokeMax(add, 3);


function bind(fn, thisArg){
    let outerFnArguments = [].slice.call(arguments,2);
    return function(){
       let innerFnArguments = [].slice.call(arguments);
       let allArgs = outerFnArguments.concat(innerFnArguments);
            return fn.apply(thisArg,allArgs);
        
    }
}

const rotateArrToRight = ( arr, numTimes ) => {
    for(let i = 0; i < numTimes; i++){
        let lastElement = arr.pop();
        arr.unshift(lastElement);
    }
    return arr;
}
// 
const checkIfAnagrams = (str1, str2) => {
    let sortedStrToArr1 = [...str1.toLowerCase()].sort();
    let sortedStrToArr2 = [...str2.toLowerCase()].sort();
    
    return sortedStrToArr1.join('') === sortedStrToArr2.join('');
   
}
// console.log(checkIfAnagrams("alex", "stef"));

const findVowels = str => {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let strToArr = [...str.toLowerCase()];
    let count = 0
    for(let i = 0; i < strToArr.length; i++){
        let currentChar = strToArr[i];
        if(vowels.indexOf(currentChar) !== -1){
            count++;
        }
    }
    return count;
}
// 
//How to turn an object into an array
// let keys = Object.keys(obj);
// let values = Object.values(obj);
// let entries = Object.entries(obj);

function finalGrade(num1, num2, num3){
    let avg = ( num1 + num2 + num3 ) / 3;
    if(  (num1 > 0)  && (num2 > 0) && (num3 > 0) &&
        (num1 < 100)  && (num2 < 100) && (num3 < 100) ){
          if(avg <= 59) {return 'F';}
          if(avg <= 69) return 'D';
          if(avg <= 79) return 'C';
          if(avg <= 89) return 'B';
          if(avg <= 100) return 'A';
    } else {
        return 'You have entered an invalid grade.';
    }
}

console.log(finalGrade(90,95,98))

