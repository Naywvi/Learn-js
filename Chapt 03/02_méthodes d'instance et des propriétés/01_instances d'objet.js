//-------------------------------------------------|
/*
Ici nous avons notre objet BankAccount qui contient "owner" et "balance" via le mot clef "this." permettant de donner par la suite
une valeur à la variable nº12 "new" afin de crée une instance dans l'objet.
Puis "constructor" nous permettant de mettre en place la création d'un object modulable.
*/
//-------------------------------------------------|
class BankAccount {
    constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
    }
    showBalance() {
    console.log("Solde: " + this.balance + " EUR");
    }
}
const newAccount = new BankAccount("Will Alexander", 500);

newAccount.showBalance(); // imprime "Solde: 500 EUR" à la console

//Ici la méthode est Showbalance. Nous permettant de mettre en forme le rendu de notre objet?.