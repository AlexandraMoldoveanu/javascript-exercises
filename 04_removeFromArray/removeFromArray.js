const removeFromArray = function(anArray, ...elementsToRemove) {
        
       
    let elementsToRemoveArray =  Array.prototype.slice.call(elementsToRemove);
    console.log(elementsToRemoveArray);

    for(let i = 0; i < elementsToRemoveArray.length; i++){
        let index = anArray.indexOf(elementsToRemoveArray[i]);
        if(index > -1){
            anArray.splice(index, 1);
        }
    }
    console.log(anArray);
    return anArray;
    };

// Do not edit below this line
module.exports = removeFromArray;
