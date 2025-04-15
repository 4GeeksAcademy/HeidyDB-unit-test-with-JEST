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
function fromDollarToYen(euro){
    return fromEuroToDollar(euro)*156.5
}

function fromEuroToDollar(euro){
    return euro*1.07 ;
}

function fromYenToPound(euro){
     return  fromDollarToYen(euro)*0.87 / fromEuroToDollar(euro)
}

// Just a console log for ourselves
console.log(fromEuroToDollar(euro))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar };