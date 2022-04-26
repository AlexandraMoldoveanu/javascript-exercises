// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
const multiplyNumeric = (anObj) => {
    for(let key in anObj){
        if (typeof anObj[key] === "number"){
            anObj[key] = anObj[key] * 2;
        }
    }
} 


  multiplyNumeric(menu);
  console.log(menu);
  
 