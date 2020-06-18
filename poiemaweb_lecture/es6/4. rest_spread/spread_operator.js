console.log(...[1, 2, 3]);
console.log(...'Hello');

console.log(...new Map([['a', 1], ['b', 2]]));
console.log(...new Set([1, 2, 3]));

//console.log(...{a: 1, b: 2}); // error
let a = {a : 1, ...{a : 2, b: 3}};
console.log(a)

function foo(x, y, z) {
    console.log(x);
    console.log(y);
    console.log(z);
}
const arr = [1, 2, 3];
foo(...arr);