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
function fromDollarToYen(euro){ //142,21
    return fromEuroToDollar(euro)*156.5
}

function fromEuroToDollar(euro){//1,14
    return euro*1.07 ;
}

function fromYenToPound(euro){ //o,oo53
     return  fromEuroToDollar(euro)/ fromDollarToYen(euro)*0.87 
}

// Just a console log for ourselves
console.log(fromEuroToDollar(euro))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar };