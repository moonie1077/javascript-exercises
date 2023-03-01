const findTheOldest = function(people) {
people.forEach(person => {
person['age'] = ((person.yearOfDeath == undefined)? new Date().getFullYear(): person.yearOfDeath)
                -person.yearOfBirth})
return (people.reduce((prev, current) => (prev.age > current.age) ? prev: current))
};


//   const people = [
//      {
//        name: "Carly",
//        yearOfBirth: 1942,
//        yearOfDeath: 1970,
//      },
//      {
//        name: "Ray",
//        yearOfBirth: 1962,
//        yearOfDeath: 2011,
//      },
//      {
//        name: "Jane",
//        yearOfBirth: 1912,
//        yearOfDeath: 1941,
//      },
//            {
//        name: "Andy",
//        yearOfBirth: 1978,
//      },
//    ]
//findTheOldest(people)
//document.getElementById("demo").innerHTML = getTheTitles(books);
// Do not edit below this line
module.exports = findTheOldest;