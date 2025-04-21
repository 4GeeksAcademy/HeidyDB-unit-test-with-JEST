// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
   let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});


//testing function fromEuroToDollar
test("One euro should be 1.07 dollars", function() {
// Import the function from app.js
const { fromEuroToDollar } = require('./app.js');

// Use the function like its supposed to be used
const dollars = fromEuroToDollar(3.5);

// If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
const expected = 1 * 1.07; 

// This is the comparison for the unit test
expect(fromEuroToDollar(1)).toBe(1.07); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

//testting from dollarToYen 
//se corre npm test

test("3.5 dollars should be 511.9158 yen", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');
    const yen = fromDollarToYen(3.5);
    const expected = 3.5/1.07 * 156.5; //511.9158
    expect(yen.toFixed(3)).toBe(expected.toFixed(3)); //para q quede en 3 decimales con la funcion toFixed
    })


  //testting fromYenToPound
//se corre npm test

test("3.5 yen should be 0,019 pounds", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');
    const yen = fromYenToPound(3.5);
    const expected =  3.5/156.5*0.87; //0.019
    expect(yen.toFixed(3)).toBe(expected.toFixed(3)); 
    })

    // npm run 
    // npm test 
    //en package.json test:"jest"
