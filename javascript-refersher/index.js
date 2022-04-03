let age = 24;
let names = 'Josh';
names = 'Jake';

console.log('name: ', names);

for (let i = 0; i < 5; i++) {
  // console.log('Running from the for loop')
}

while (age < 37) {
  // age++
}

function addNums(a, b) {
  console.log('has been called from addNums');
  return a + b;
}

addNums(5, 10);




// split() -> string to array
// join('') -> array to string

// The splice() method changes the contents of an array by removing or replacing
// existing elements and/or adding new elements in place. To access part of an array
// without modifying it, see slice()
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');

// every() tests whether all elements in the array pass the test implemented by
// the provided function. It returns a Boolean value.

// some()  tests whether at least one element in the array passes the test
// implemented by the provided function. It returns true if, in the array, it
// finds an element for which the provided function returns true; otherwise it
// returns false. It doesn't modify the array. It returns a Boolean value.
