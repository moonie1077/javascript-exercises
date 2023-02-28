const removeFromArray = function() {

const inputArray = arguments[0];
for (let i=1; i < arguments.length; i++) {
    if (inputArray.indexOf(arguments[i]) != -1)
      {inputArray.splice(inputArray.indexOf(arguments[i]),1)}
}

return inputArray;
}

document.getElementById("demo").innerHTML = removeFromArray([0,1,2,3], 0, 9, 10, 11, 12);
// Do not edit below this line
//module.exports = removeFromArray;
