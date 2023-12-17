const {add, minus, defaultNum} = require('./calculator');
const calculator = require('./calculator');

console.log(add(1, 2)); // 3
console.log(minus(2, 2)); // 0
console.log(defaultNum); // 1 (calculator.js에서 defaultNum에 1을 저장했기 떄문)
console.log(add(defaultNum, 1)); // 2
console.log(add(1, defaultNum)); // 2 
console.log(minus(1)); // NaN
console.log(calculator.add(2,3)); // 5
console.log(calculator.minus(1)); // NaN
console.log(calculator);
// {
//     defaultNum: 1,
//     add: [Function: add],
//     minus: [Function: minus],
//     multiply: [Function: multiply],
//     divide: [Function: divide]
// }