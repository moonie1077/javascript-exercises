const add = function(a,b) {
	return a + b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arraySum) {
    let total = 0;
	for (let i = 0; i<arraySum.length; i++) {
	total += arraySum[i];
	}
return total;
};

const multiply = function(arrayMult) {
let totalMult = 1
   for (let i=0; i<arrayMult.length; i++)
   {totalMult *= arrayMult[i]}
  return totalMult
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(number) {
let totalFact = 1
	if (number === 0 || number === 1) return 1;
	for (number; number != 0; number--)
	{totalFact *= number}
return totalFact;
};

//document.getElementById("demo").innerHTML = factorial(3);
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
