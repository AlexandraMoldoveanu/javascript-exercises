

const findTheOldest = function(anArray) {   
    anArray.sort( (a,b) => {
        let lastPerson = a.yearOfDeath - a.yearOfBirth;
        let nextPerson = b.yearOfDeath - b.yearOfBirth;
        if("yearOfDeath" in a === false){
            lastPerson = new Date().getFullYear() - a.yearOfBirth;
        }
        if("yearOfDeath" in b === false){
            nextPerson = new Date().getFullYear() - b.yearOfBirth;
        }
        if(lastPerson < nextPerson){
            return -1;
        } else {
            return 1;
        }
    })
    return anArray[anArray.length-1];
};

// Do not edit below this line
module.exports = findTheOldest;
