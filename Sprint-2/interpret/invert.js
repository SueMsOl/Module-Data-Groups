// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}
//console.log(invert({a:1, b:2}));
module.exports = invert;
// a) What is the current return value when invert is called with { a : 1 } => it is { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 } => it is { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2} => {"1":"a", "2":"b"}

// c) What does Object.entries return? Why is it needed in this program? => Object.enteries returns [[a,1],[b,2]] . 

// d) Explain why the current return value is different from the target output => in line 13, key and value must exchange places.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
