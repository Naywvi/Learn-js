/* Comme expliqué précédemment, une classe est un modèle pour un objet dans le code. Elle permet 
de construire plusieurs objets du même type (appelés instances de la même classe) plus facilement,
rapidement et en toute fiabilité. */

//Déclarer d'une instance
class Book {
}
/*Pour cette classe, nous souhaitons que chaque   Book  ait un titre, un auteur et un nombre de pages.
Pour cela, vous utilisez ce qu'on appelle un constructor.*/
class Book {
    constructor(title, author, pages) {
    }
}
/*Il y a un ensemble d'instructions à suivre à l'intérieur du  constructor  pour créer une instance 
de la classe   Book  . Pour attribuer le titre, l'auteur et le nombre de pages reçus à cette instance, 
utilisez le mot clé   this  et la notation dot.*/
class Book {
    constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    }
}
/*Ici, le mot clé   this  fait référence à la nouvelle instance. Donc, il utilise la notation dot 
pour attribuer les valeurs reçues aux clés correspondantes.
Maintenant que la classe est terminée, vous pouvez créer des instances par le mot clé   new  : */
let myBook = new Book("L'Histoire de Tao", "Will Alexander", 250);

/*Cette ligne crée l'objet suivant :

{
title: "L'Histoire de Tao",
author: "Will Alexander",
pages: 250
}

*/