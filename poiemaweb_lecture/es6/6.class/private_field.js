class Foo {
    public_x = 1;
    #private_name;
    static y = 20;
    static #sp = 30;

    constructor(name, age) {
        this.#private_name = name;
        this.age = age;
    }

    print_privateName() {
        console.log(this.#private_name);
    }

    static print_privateStaticName() {
        console.log(this.#sp);
    }
}

const foo = new Foo('dongho', 10);
console.log(foo);       // Foo { public_x: 1, age: 10 }

console.log(foo.public_x);  // 1

//console.log(foo.#private_name); // error

foo.print_privateName(); // dongho

console.log(Foo.y);
console.log(foo.y);     // undefined

Foo.print_privateStaticName(); // 30
// foo.print_privateStaticName(); Error
