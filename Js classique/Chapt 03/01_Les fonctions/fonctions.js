// On définit la fonction

function afficherDeuxValeurs(valeur1, valeur2) {
    console.log('Première valeur:' + valeur1);
    console.log('Deuxième valeur:' + valeur2);
}

// On exécute la fonction
afficherDeuxValeurs(12, 'Bonjour');

// On obtient dans la console
// > Première valeur:12 
// > Deuxième valeur:Bonjour 

//-------------------------------------------------|

//Calcule d'une moyenne

const calculateAverageRating = (ratings) => {
    if(ratings.length === 0) {
    return 0;
    }
    let sum = 0;
    for (let rating of ratings) {
    sum += rating;
    }
    return sum / ratings.length;
}


const tauRatings = [5, 4, 5, 5, 1, 2];
const colinRatings = [5, 5, 5, 4, 5];

const tauAverage = calculateAverageRating(tauRatings);
const colinAverage = calculateAverageRating(colinRatings);