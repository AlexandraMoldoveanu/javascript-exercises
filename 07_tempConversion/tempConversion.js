const round = function(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

const ftoc = function(temp) {
  
let conversion =  round(((temp - 32) * 5/9), 1);
return conversion;
};

const ctof = function(temp) {
  let conversion = round((temp * 9/5 + 32), 1);

  return conversion;
};

// Do not edit below this line
module.exports = {
  round,
  ftoc,
  ctof
};
