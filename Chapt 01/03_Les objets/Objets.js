//Les objets JavaScript sont écrits en JSON 
let myBook = {
    title: 'The Story of Tau',
    author: 'Will Alexander',
    numberOfPages: 250,
    isAvailable: true
    };
//-------------------------------------------------|
//Accéder aux variables de la structure notation pointée "dot"
let myBook = {
    title: "L'Histoire de Tao",
    author: "Will Alexander",
    numberOfPages: 250,
    isAvailable: true
    };
let bookTitle = myBook.title;  // "L'Histoire de Tao"
let bookPages = myBook.numberOfPages  // 250
//-------------------------------------------------|
//La notation bracket
let myBook = {
    title: "L'Histoire de Tao",
    author: "Will Alexander",
    numberOfPages: 250,
    isAvailable: true
};
let bookTitle = myBook["title"];  // "L'Histoire de Tao"
let bookPages = myBook["numberOfPages"];  // 250
//-------------------------------------------------|
//La notation bracket (bracket notation)
let myBook = {
    title: "L'Histoire de Tao",
    author: "Will Alexander",
    numberOfPages: 250,
    isAvailable: true
};
let propertyToAccess = "title";
let bookTitle = myBook[propertyToAccess];  // "L'Histoire de Tao"
//-------------------------------------------------|