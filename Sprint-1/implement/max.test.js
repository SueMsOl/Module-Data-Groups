/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/

const findMax = require("./max.js");

// Given an empty array
// When passed to the max function
// Then it should return -Infinity
// Delete this test.todo and replace it with a test.
//test.todo("given an empty array, returns -Infinity");
test (" ", ()=>{
    expect(findMax([1,2,5,8])).toEqual(8);
})

// Given an array with one number
// When passed to the max function
// Then it should return that number
test (" ", ()=>{
    expect(findMax([1])).toEqual(1);
})

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test (" ", ()=>{
    expect(findMax([1,-8,9,-5])).toEqual(9);
})


// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test (" ", ()=>{
    expect(findMax([-10,-81,-17,-6])).toEqual(-6);
})


// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test (" ", ()=>{
    expect(findMax([1.8,8.9,5.4])).toEqual(8.9);
})


// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test (" ", ()=>{
    expect(findMax([1,5,8,"a"])).toEqual(8);
})


// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test (" ", ()=>{
    expect(findMax(["a","b","c"])).toEqual(-Infinity);
})
