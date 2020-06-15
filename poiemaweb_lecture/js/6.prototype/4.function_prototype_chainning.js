function Person(name, gender) {
    this.name = name;
    this.gender = gender;
    this.sayHello = function() {
        console.log('Hi! my name is ' + this.name);
    };
}

var foo = new Person('Lee', 'male');

console.log(foo.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(Person.prototype.constructor === Person); // true
console.log(Person.__proto__ === Function.prototype); // true
console.log(Function.prototype.__proto__ === Object.prototype); // true

