const repeatString = function (string, num) {
    answer = "";
    if (num < 0) {
        return "ERROR"
    } else {
        for (i = num; i > 0; i--) {
            answer += string;
        }
        return answer;
    };
};
// Do not edit below this line
module.exports = repeatString;
