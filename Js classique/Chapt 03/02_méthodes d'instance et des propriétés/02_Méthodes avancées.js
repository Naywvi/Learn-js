//-------------------------------------------------|
/*
Vous pouvez aussi ajouter des méthodes capables de modifier les propriétés 
de l'instance. Dans ce cas, ajoutez les méthodes   deposit()  (dépôt) et   withdraw()  (retrait) 
à la classe, en n'oubliant pas que les deux ont besoin d'un paramètre   amount  (montant) 
(parce que vous devez savoir combien déposer ou retirer !) :
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
    
    deposit(amount) {
        console.log("Dépôt de " + amount + " EUR");
    this.balance += amount;
    this.showBalance();
    }
    
    withdraw(amount) {
    if (amount > this.balance) {
            console.log("Retrait refusé !");
    } else {
            console.log("Retrait de " + amount + " EUR");
    this.balance -= amount;
    this.showBalance();
    }
    }
    }
//-------------------------------------------------|
/*
La méthode   deposit()  affiche le montant du dépôt sur la console, ajoute le montant 
au solde de l'instance, puis appelle la méthode   showBalance()  de l'instance, imprimant 
ainsi le nouveau solde sur la console.

Dans le corps d'une classe, le mot clé this fait référence à l'instance créée de la classe. 
Dans cet exemple, il fait référence à   newAccount  .

La méthode   withdraw()  vérifie si le montant demandé est supérieur au solde actuel. Si 
c'est le cas, il refuse le retrait ; sinon, il l'autorise, en soustrayant le montant du solde 
et en affichant le nouveau solde sur la console.
*/
//-------------------------------------------------|