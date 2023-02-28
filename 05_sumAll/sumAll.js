const sumAll = function(numberOne, numberTwo) {
let sum = 0;
let lower = numberOne;
let upper = numberTwo;
if (Number.isInteger(numberOne) &&
    Number.isInteger(numberTwo) &&
    numberOne >= 0 &&
    numberTwo >= 0) {
    if (numberTwo < numberOne) {
        lower = numberTwo;
        upper = numberOne;
        }

    for (i = lower; i < upper + 1; i++)
        {
        console.log(i + " " + lower + " " + upper);
        sum += i;}

    return sum;
} else  {return "ERROR"}
};

//document.getElementById("demo").innerHTML = sumAll(4,[9]);
// Do not edit below this line
module.exports = sumAll;
