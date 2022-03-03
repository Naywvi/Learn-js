//Grossièrement les méthodes static sont des "fonctions"

const randomNumber = Math.random(); // crée un nombre aléatoire sur l'intervalle [0, 1]

const roundMeDown = Math.floor(495.966); // arrondit vers le bas à l'entier le plus proche, renvoie 495

//-------------------------------------------------|
/*
Vous n'avez pas besoin de créer par   new  une instance de l'objet   Math  pour utiliser 
ces méthodes ; il suffit de les appeler sur l'objet   Math  global.
*/
//-------------------------------------------------|


//Nous pouvons crée nos propres méthodes et les appeler par la suite

class BePolite {
    
    static sayHello() {
        console.log("Hello!");
    }
    
    static sayHelloTo(name) {
        console.log("Hello " + name + "!");
    }
    
    static add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
    }
    }
    
    BePolite.sayHello(); // imprime "Hello!""
    
    BePolite.sayHelloTo("Will"); // imprime "Hello Will!""
    
    const sum = BePolite.add(2, 3); // sum = 5

//-------------------------------------------------|
/*
Vous n'avez pas besoin d'ajouter un   constructor  à votre classe, car vous n'allez pas l'instancier.
Vous avez une méthode qui :

imprime un message générique ;

accepte un argument et l'utilise pour créer un message ;

renvoie une valeur à partir des arguments que vous lui envoyez.

Toutes ces fonctionnalités pourraient être des fonctions, mais l'avantage d'utiliser des méthodes de
classe statiques est par exemple de pouvoir les regrouper par catégorie ou par type.
*/
//-------------------------------------------------|