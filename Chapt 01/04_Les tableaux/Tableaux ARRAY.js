
let artistProfile = {
    name: "Tao Perkington",
    age: 27,
    available: true
    };
let allProfiles = [artistProfile]; // nouveau tableau contenant l'objet ci-dessus
artistProfile.available = false; // modification de l'objet
console.log(allProfiles) // affiche { nom: "Tao Perkington", âge: 27, disponible: false }
//-------------------------------------------------|
//Ici lenght = len(guests) soit la taille de : guests || avec la notation dot soit guests.length
let guests = ["Will Alexander", "Sarah Kate", "Audrey Simon"];
let howManyGuests = guests.length; // 3

// ajoute "Tao Perkington" à la fin de notre tableau guests
guests.push("Tao Perkington"); 

// "Tao Perkington" est ajouté au début du tableau guests
guests.unshift("Tao Perkington"); 

// supprimer le dernier élément du tableau
guests.pop(); 
//-------------------------------------------------|
