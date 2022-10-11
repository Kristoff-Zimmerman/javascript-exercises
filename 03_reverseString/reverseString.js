const reverseString = function(str) {
    let strArray = [];

    for (let i = 1; i <= str.length; i++) {
        strArray.push(str.substr(-i, 1));
    }
    let revStr = strArray.join("");
    return revStr;
};

// Do not edit below this line
module.exports = reverseString;
