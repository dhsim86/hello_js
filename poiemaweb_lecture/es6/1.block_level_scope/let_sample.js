var foo = 123;

console.log(foo);

{
    var foo = 456;
}

console.log(foo);

console.log("--------------")

let bar = 123;

{
    let foo = 123;
    let bar = 456;
}

console.log(foo);
console.log(bar);

//let bar = 456;  // error