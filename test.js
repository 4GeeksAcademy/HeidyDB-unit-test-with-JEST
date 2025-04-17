// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
   let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
// Import the function from app.js
const { fromEuroToDollar } = require('./app.js');

// Use the function like its supposed to be used
const dollars = fromEuroToDollar(3.5);

// If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
const expected = 3.5 * 1.07; 

// This is the comparison for the unit test
expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
});


//TESTEAR cange de dollar a yen 
test("One dollar should be 146 yen", function() {
// Import the function from app.js
const { fromDollartoYen } = require('./app.js');

// Use the function like its supposed to be used
const yen = fromDollartoYen(3.5);

// If 1 dollar is 146 yen, then 3.5 dollar should be (3.5 * 146) yen 
const expected = 3.5 * 146; 

// This is the comparison for the unit test
expect(fromDollartoYen(3.5)).toBe(511); //
});


//testear cange de yen a libras 
test("One yen should be 0.0053 pounds", function() {
// Import the function from app.js
const { fromYentoPounds } = require('./app.js');

// Use the function like its supposed to be used
const pounds = fromYentoPounds(3.5);

// If one yen is 0.0053 pounds , then 3.5 yen  should be (3.5 * 1.0053) yen 
const expected = 3.5 * 0.0053; 

// This is the comparison for the unit test
expect(fromDollartoYen(3.5)).toBe(0.019); //
});




