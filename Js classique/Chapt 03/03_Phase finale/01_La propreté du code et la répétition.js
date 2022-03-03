//La refactorisation du code consiste à modifier la structure d'un élément de code sans changer son comportement.

if (firstUser.online) {
    if (firstUser.accountType === "normal") {
        console.log("Hello " + firstUser.name + "!");
    } else {
    console.log("Welcome back premium user " + firstUser.name + "!");
    }
    
    }
    if (secondUser.online) {
    if (secondUser.accountType === "normal") {
        console.log("Hello " + secondUser.name + "!");
    } else {
    console.log("Welcome back premium user " + secondUser.name + "!");
    }
    }
    
    if (thirdUser.online) {
    if (thirdUser.accountType === "normal") {
        console.log("Hello " + thirdUser.name + "!");
    } else {
    console.log("Welcome back premium user " + thirdUser.name + "!");
    }
    }
//-------------------------------------------------|
/*
Nous répétons ici la même tâche plusieurs fois pour des utilisateurs différents. 
C'est une bonne occasion de factoriser votre code dans une fonction :
*/
//-------------------------------------------------|
const sendWelcomeMessageToUser = (user) => {
    if (user.online) {
    if (user.accountType === "normal") {
    console.log("Hello " + user.name + "!");
    } else {
    console.log("Welcome back premium user " + user.name + "!");
    }
    }
    }
    sendWelcomeMessageToUser(firstUser);
    sendWelcomeMessageToUser(secondUser);
    sendWelcomeMessageToUser(thirdUser);
//-------------------------------------------------|
/*
Nous avons créé une fonction   sendWelcomeMessageToUser  (un nom qui exprime clairement 
ce que fait la fonction) et l'avons appelée pour chaque utilisateur. Dans ce cas, 
nous avons réduit la quantité de code de 23 lignes à 13, tout en le rendant plus 
lisible. Grâce à un nom de fonction descriptif, vous pouvez indiquer que nous envoyons 
un message de bienvenue à trois utilisateurs.
*/
//-------------------------------------------------|

//EXEMPLE 02

//variable de différentes personnes
let personne1 = "Jean";
let personne2 = "Paul";
let person3 = "Marcel";

//On met la première lettre en majuscule, on salue la première personne et on donne le nombre de lettre dans son prénom
personne1 = personne1[0].toUpperCase() + personne1.substr(1);
const longueurPrenom1 = personne1.length;
console.log(`Bonjour ${personne1}, ton prénom contient ${longueurPrenom1} lettres`);

//On met la première lettre en majuscule, on salue la deuxième personne et on donne le nombre de lettre dans son prénom
personne2 = personne2[1].toUpperCase() + personne2.substr(1);
const longueurPrenom2 = personne2.length;
console.log(`Bonjour ${personne2}, ton prénom contient ${longueurPrenom2} lettres`);

//On met la première lettre en majuscule, on salue la troisième personne et on donne le nombre de lettre dans son prénom
personne3 = personne3[2].toUpperCase() + personne3.substr(1);
const longueurPrenom3 = personne3.length;
console.log(`Bonjour ${personne3}, ton prénom contient ${longueurPrenom3} lettres`);

//-------------------------------------------------|

//variable de différentes personnes
let personne1 = "Jean";
let personne2 = "Paul";
let personne3 = "Marcel";

function saluer(prenom){
  //On met la première lettre en majuscule, on salue la personne et on donne le nombre de lettre dans son prénom
  const monPrenom = prenom[0].toUpperCase() + prenom.substr(1);
  const longueurPrenom = monPrenom.length;
  console.log(`Bonjour ${monPrenom}, ton prénom contient ${longueurPrenom} lettres`);
}

//On salue les 3 personnes
saluer(personne1);
saluer(personne2);
saluer(personne3);
