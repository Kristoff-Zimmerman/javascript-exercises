const sumAll = function(num1, num2) {
  let numHigh = 0;
  let numLow = 0;

  if (typeof num1 != "number" || typeof num2 != "number") {
    return "ERROR";
  }
  
  else if (num1 < 1 || num2 < 1) {
    return "ERROR";
  }

  else {
    if (num1 > num2) {
        numHigh = num1;
        numLow = num2;
    } else {
        numHigh = num2;
        numLow = num1;
    }
  }

  numSum = 0;

  while (numHigh >= numLow) {
    numSum += numHigh;
    numHigh--;
  }

  return numSum;
};

// Do not edit below this line
module.exports = sumAll;
