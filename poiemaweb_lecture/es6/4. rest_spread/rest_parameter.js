function foo(param, ...rest) {
    console.log(Array.isArray(rest));
    console.log(param);
    console.log(rest);
}
console.log(foo.length);
foo(1, 2, 3, 4, 5);