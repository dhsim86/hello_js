function Person(name) {
    this.name = name;
}

var foo = new Person('Lee');

console.dir(Person);
console.log(Person.hasOwnProperty('prototype'));    // true

console.log(Person.__proto__ === Function.prototype); // true
console.log(Person.constructor === Function); // true

console.log(Person.prototype.constructor === Person); // true

//

console.dir(foo);
console.log(foo.hasOwnProperty('prototype')); // false

console.log(foo.__proto__ === Person.prototype); // true

console.log(foo.constructor === Person); // true