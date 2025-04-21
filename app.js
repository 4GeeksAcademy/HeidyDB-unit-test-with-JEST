// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}



// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen 
    "USD": 1.07, // us dollar 
    "GBP": 0.87, // british pound 
}
let euro;
function fromDollarToYen(dollar){ //
    return dollar/1.07*156.5;
}

function fromEuroToDollar(euro){//
    return euro*1.07 ;
}

function fromYenToPound(yen){ //
     return  yen/156.5*0.87;
}

// Just a console log for ourselves
console.log(fromEuroToDollar(euro))

// se exportan las funciones que vamos a testear a  (test-js)
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromYenToPound, fromDollarToYen };
