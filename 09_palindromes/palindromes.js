const palindromes = function (aString) {
    aString = aString.toLowerCase();
    aString = aString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    aString = aString.replace(/\s/g, '');
    let splitString = aString.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    if(aString === joinArray){
        return true;
    }
    return false;

};

// Do not edit below this line
module.exports = palindromes;
