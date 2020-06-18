class Person {
    constructor(name) {
        this._name = name;
    }

    sayHi() {
        console.log(`Hi! ${this._name}`);
    }
}

const me = new Person('Lee');
me.sayHi();

console.log(me instanceof Person);

const Foo = class MyClass{};
const foo = new Foo();

console.log(foo);
console.log(Object.getPrototypeOf(foo).constructor == Foo);
// new MyClass(); Error