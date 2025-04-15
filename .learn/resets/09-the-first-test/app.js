// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
let euro;
function fromDollarToYen(euro){
    return fromEuroToDollar()*156.5
}

function fromEuroToDollar(euro){
    return euro*1.07
}

function fromYenToPound(){
    return fromEuroToDollar(euro) / fromDollarToYen()*0.87
}

// Just a console log for ourselves
console.log(fromYenToPound(euro))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { fromYenToPound };