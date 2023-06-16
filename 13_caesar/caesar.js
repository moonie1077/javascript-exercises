const caesar = function(string, shift) {
const arrayString = string.split("")
const workingArray = []

if (Math.abs(shift) > 26) {shift = shift % 26;}

arrayString.forEach((item) => {
  if ((/[a-z]/).test(item)) {
    ((item.charCodeAt(0) + shift) > 122? shift = shift - 26: shift);
    ((item.charCodeAt(0) + shift) < 97? shift = shift + 26: shift);
    workingArray.push(String.fromCharCode((item.charCodeAt(0)) + shift));
    }
  else if  ((/[A-Z]/).test(item)) {
    ((item.charCodeAt(0) + shift) > 90? shift = shift - 26: shift);
    ((item.charCodeAt(0) + shift) < 65? shift = shift + 26: shift);
    workingArray.push(String.fromCharCode((item.charCodeAt(0)) + shift));
    }
  else { workingArray.push(item)}
})

return workingArray.join('');
};

//document.getElementById("demo").innerHTML = caesar("Ybooks, good book!",-5);
// Do not edit below this line
module.exports = caesar;
