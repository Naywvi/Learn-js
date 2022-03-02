//-------------------------------------------------|
/*
Une boucle   while  vérifie si une condition est vraie. Si c'est le cas, 
la boucle se poursuit ; sinon elle s'arrête. En revenant à l'exemple de 
l'embarquement d'avion : supposons que vous ayez des variables représentant 
le nombre de sièges restants et le nombre de passagers restants. Vous souhaitez 
continuer l'embarquement jusqu'à l'épuisement du nombre de sièges ou de passagers :
*/
//-------------------------------------------------|

let seatsLeft = 10;
let passengersStillToBoard = 8;
let passengersBoarded = 0;

while (seatsLeft > 0 && passengersStillToBoard > 0) {
passengersBoarded++; // un passager embarque
passengersStillToBoard--; // donc il y a un passager de moins à embarquer
seatsLeft--; // et un siège de moins
}

console.log(passengersBoarded); // imprime 8, car il y a 8 passagers pour 10 sièges