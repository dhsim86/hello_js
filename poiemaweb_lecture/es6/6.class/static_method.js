class Foo {
    constructor(prop) {
        this.prop = prop
    }

    static staticMethod() {
        return 'staticMethod';
    }

    prototypeMethod() {
        return this.prop;
    }
}

console.log(Foo.staticMethod());

const foo = new Foo(123);
// console.log(foo.staticMethod()); Error

var Foo2 = (function() {

    function Foo(prop) {
        this.prop = prop
    }

    Foo.staticMethod = function() {
        return 'ES5_StaticMethod';
    }

    Foo.prototype.prototypeMethod = function() {
        return this.prop;
    }

    return Foo;

}());

var foo2 = new Foo2(123);
console.log(Foo2.staticMethod());
console.log(foo.prototypeMethod());
//console.log(foo2.staticMethod()); // Error;