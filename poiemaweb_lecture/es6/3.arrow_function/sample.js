const str = "Hi!";

() => {};
() => { console.log(str) };
x => { return x + x };

() => { return {a : 1} };
() => ({ a : 1 });

//

var pow = function (x) {
    return x * x;
}
console.log(pow(10));

const pow2 = x => x * x;
console.log(pow2(10));

//

var arr = [1, 2, 3];
var pow = arr.map(function (x) {
    return x * x;
});
console.log(pow);

const arr2 = [1, 2, 3];
const pow3 = arr.map(x => x * x);
console.log(pow3);