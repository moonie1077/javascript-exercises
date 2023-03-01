const getTheTitles = function(arrayBooks) {
let titles = [];
arrayBooks.forEach(book => titles.push(book.title))

return titles;
};

//const books = [
//  {
//    title: 'Book',
//    author: 'Name'
//  },
//  {
//    title: 'Book2',
//    author: 'Name2'
//  }
//]
//document.getElementById("demo").innerHTML = getTheTitles(books);
// Do not edit below this line
module.exports = getTheTitles;
