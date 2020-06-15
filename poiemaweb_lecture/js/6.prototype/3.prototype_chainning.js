var student = {
    name: 'Lee',
    score: 90
};

console.log(student.hasOwnProperty('name'));

console.log(student.__proto__ === Object.prototype); // true
console.log(Object.prototype.hasOwnProperty('hasOwnProperty')); // true

//

var person = {
    name: 'Lee',
    gender: 'male',
    sayHello: function() {
        console.log('Hi! my name is ' + this.name);
    }
};

console.log(person.__proto__ === Object.prototype); // true
console.log(Object.prototype.constructor === Object);   // true
console.log(Object.__proto__ === Function.prototype);   // true
console.log(Function.prototype.__proto__ === Object.prototype); // true