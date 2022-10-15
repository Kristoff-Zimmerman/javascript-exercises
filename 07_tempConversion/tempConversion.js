const ftoc = function(tempF) {
  let tempC = (tempF -32)*(5/9);
  let roundTempC = Math.round (tempC * 10) / 10;
  return roundTempC;
};

const ctof = function(tempC) {
  let tempF = (tempC*(9/5))+32;
  let roundTempF = Math.round (tempF * 10) / 10;
  return roundTempF;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
