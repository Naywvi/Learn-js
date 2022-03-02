//Nous souhaitons vérifier une varible en particulier et renvoyer un message
let firstUser = {
    name: "Will Alexander",
    age: 33,
    accountLevel: "normal"
    };
    
    let secondUser = {
    name: "Sarah Kate",
    age: 21,
    accountLevel: "premium"
    };
    
    let thirdUser = {
    name: "Audrey Simon",
    age: 27,
    accountLevel: "mega-premium"
    };
//Nous utilisons le switch
    switch (firstUser.accountLevel) {
        case 'normal':
              console.log('You have a normal account!');
        
        break;
        case 'premium':
              console.log('You have a premium account!');
        
        break;
        case 'mega-premium':
              console.log('You have a mega premium account!');
        break;
        
        default:
              console.log('Unknown account type!');
        }

//-------------------------------------------------|

// Exemple avec if/else mais ceci n'est pas quali
if (firstUser.accountLevel === 'normal' ) {
    console.log('You have a normal account!');
} else if (firstUser.accountLevel === 'premium' ) {
    console.log('You have a premium account!');
} else if (firstUser.accountLevel === 'mega-premium' ) {
    console.log('You have a mega premium account!');
}  else {
    console.log('Unknown account type!');
}