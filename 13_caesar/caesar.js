let alphabetArray =
        ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const cryptOneLetter = function (letter, shiftNum) {
    let isLowerCase = true;
    let shiftIndex = 0;
    let sanitizedLetter = letter.toLowerCase();
    let letterIndex = alphabetArray.indexOf(sanitizedLetter);
    if(alphabetArray.indexOf(sanitizedLetter)!== -1){
        if (letter !== sanitizedLetter) {
            isLowerCase = false;
        }
        //in case of negative shift number, so the shift is to the left
        if(shiftNum < 0){
            
            // in case shift number is larger than the number of letters to be shifted to the LEFT and so having to go to the end of the alphabet array to  continue to count 
            if(letterIndex - Math.abs(shiftNum) < 0){
                //in case the shift number is not greater than the length of alpabet, so no modulo is needed
               if(Math.abs(shiftNum) < alphabetArray.length){
                   shiftIndex = alphabetArray.length - Math.abs(letterIndex - (Math.abs(shiftNum) % alphabetArray.length));
               } else {
                   shiftIndex =  Math.abs(letterIndex - (Math.abs(shiftNum) % alphabetArray.length));
               }
              
               
           // if that is not the case and the shift to the left is possible
           } else {
                shiftIndex = letterIndex - Math.abs(shiftNum);
            }
           
        //in case of a positive shift number, so the shift is to the right
        } else {    
            shiftIndex = ((letterIndex+shiftNum) % alphabetArray.length );   
        }
        if (isLowerCase) {
            return alphabetArray[shiftIndex];
        } else {
            return alphabetArray[shiftIndex].toUpperCase();
        }
    } else {
        return letter;
    }
    
}

const caesar = function (aString, aNumber) {
    let stringArray = [...aString];
    let result = "";
    for(let i = 0; i < stringArray.length; i++){
         result +=  cryptOneLetter(stringArray[i], aNumber);
    }
    return result;
};
 console.log(caesar('Mjqqt, Btwqi!', -5));
 console.log(caesar('Hello, World!', -29));
 console.log(caesar('Hello, World!', 75));
 console.log(caesar('Hello, World!', 5));
// Do not edit below this line
module.exports = caesar;
