//console.log(foo);       // error

let foo;

console.log(foo)        // undefined

foo = 123;

{
    let foo = 456;
}

console.log(foo);       // 123