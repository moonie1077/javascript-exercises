const convertToCelsius = function(degreesFahrenheit) {
return Math.round((degreesFahrenheit - 32) * (5/9) * 10) / 10
};

const convertToFahrenheit = function(degreesCelsius) {
return Math.round((degreesCelsius * (9/5) + 32) * 10) / 10
};

//document.getElementById("demo").innerHTML = convertToFahrenheit(73.2);
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
