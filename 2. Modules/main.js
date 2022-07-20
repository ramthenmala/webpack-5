const { add: changeMyName, addAndMultiply, subtract } = require('./functions');

changeMyName(3, 4);
subtract(3, 4);
addAndMultiply(3, 4, 5);

function add() {
  console.log('add function');
}
add();

console.log(subtract(3, 4));
console.log(changeMyName(3, 4));
console.log(addAndMultiply(3, 4, 5));