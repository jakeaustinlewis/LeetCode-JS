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

// The splice() method changes the contents of an array by removing or replacing
// existing elements and/or adding new elements in place. To access part of an array
// without modifying it, see slice()
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
