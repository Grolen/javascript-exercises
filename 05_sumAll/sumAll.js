const sumAll = function(numOne, numTwo) {
    let sum = 0;
    if (Number.isInteger(numOne) && Number.isInteger(numTwo) && numOne >= 0 && numTwo >= 0) {
        if(numTwo < numOne) {
            sum = numTwo
            for (let i = numTwo + 1; i <= numOne; i++) {
                sum += i;
            }
        } else {
            sum = numOne
            for (let i = numOne + 1; i <= numTwo; i++) {
                sum += i;
            }
        }
    } else {
        return "ERROR"
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
