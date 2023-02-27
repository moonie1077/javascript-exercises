const reverseString = function(input) {
let stringReversed = ""

for (let i = input.length; i != 0; i--) {
  stringReversed += input.substr(i-1,1);  //length is one place off for getting letter position
}
return stringReversed;
};

document.getElementById("demo").innerHTML = reverseString("Andy");

// Do not edit below this line
//module.exports = reverseString;
