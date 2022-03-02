//boucle classique

const numberOfPassengers = 10;
for (let i = 0; i < numberOfPassengers; i++) {
   console.log("Passager embarqué !");
}

console.log("Tous les passagers sont embarqués !");

//-------------------------------------------------|

//Nous pouvons travailler aussi sur la len des tableaux

for (let i = 0; i < passengers.length; i++) {
    console.log("Passager embarqué !");
}

//-------------------------------------------------|

//La boucle "for… in" plus lisible itére automatiquement

const passengers = [
    "Will Alexander",
    "Sarah Kate'",
    "Audrey Simon",
    "Tao Perkington"
    ]
    
for (let i in passengers) {
   console.log("Embarquement du passager " + passengers[i]);
}

//-------------------------------------------------|

//La boucle "for… of" comparable à "for a,x := range xxx" Ici on peut récupéré l'itération (pratique pour les tableaux)

const passengers = [
    "Will Alexander",
    "Sarah Kate",
    "Audrey Simon",
    "Tao Perkington"
    ]
    
for (let passenger of passengers) {
       console.log("Embarquement du passager " + passenger);
}

//deuxième exemple

const passengers = [
"Will Alexander",
"Sarah Kate",
"Audrey Simon",
"Tao Perkington"
]

for (let passenger of passengers) {
   console.log("Embarquement du passager " + passenger);
}

//-------------------------------------------------|

// /!\ Ici on affiche chaque élément de mon tableau

for (let elementDeTableau of monTableau) {
    console.log(elementDeTableau); //Affiche chaque élément individuellement
}