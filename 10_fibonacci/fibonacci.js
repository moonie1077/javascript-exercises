const fibonacci = function(number) {
//1,1,2,3,5,8,13
let numberOne = 1;
let numberTwo = 1;
if (number<0) return "OOPS"
for (let i =1; i < number-1 ; i++) {
let temp = numberTwo;
numberTwo = numberOne + numberTwo;
numberOne = temp;

     }

return numberTwo;
};
//document.getElementById("demo").innerHTML = fibonacci("6");
// Do not edit below this line
module.exports = fibonacci;
