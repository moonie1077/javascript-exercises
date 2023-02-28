const palindromes = function (text) {
const wholeText = text.split("");
const justText = []

wholeText.forEach((item) => {
  if ((/[a-zA-Z]/).test(item)) {justText.push(item.toLowerCase());}
});

if (justText.join('') === justText.reverse().join("")) return true;
return false;
};
//document.getElementById("demo").innerHTML = palindromes("racecar");
// Do not edit below this line
module.exports = palindromes;
