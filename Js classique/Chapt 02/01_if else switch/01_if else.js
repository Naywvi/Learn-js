if (myBoolean) {
    // réaction à la valeur vraie de myBoolean
    } else {
    // réaction à la valeur faux de myBoolean
    }

//-------------------------------------------------|

let UserLoggedIn = true;
if (UserLoggedIn) {
   console.log("Utilisateur connecté!");
} else {
   console.log("Alerte, intrus!");
}

//-------------------------------------------------|

const numberOfSeats = 30;
const numberOfGuests = 25;
if (numberOfGuests < numberOfSeats) {
// autoriser plus d'invités
} else {
// ne pas autoriser de nouveaux invités
}

//-------------------------------------------------|

if (numberOfGuests == numberOfSeats) {
    // tous les sièges sont occupés
} else if (numberOfGuests < numberOfSeats) {
    // autoriser plus d'invités
} else {
    // ne pas autoriser de nouveaux invités
}