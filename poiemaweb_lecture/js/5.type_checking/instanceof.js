var Super = function(name, age) {
  this.name = name;
  this.age = age;
}

var Child = function(name, age, value) {
  this.value = value;
}

Super.prototype.print = function() {
  console.log(this.name);
  console.log(this.value);
}

console.log(Super.prototype.constructor); // [Function: Super]

console.log('-----------------------')

console.log(Child.__proto__);           // [Function]
console.log(Child.prototype.__proto__); // {}
console.log(Child.prototype.constructor); // [Function: Child]
console.log(Child.prototype.__proto__.constructor)  // [Function: Object]

child = new Child(10);
console.log(child instanceof Super);  // false

console.log('-----------------------')

Child.prototype = Object.create(Super.prototype);

console.log(Child.__proto__);           // [Function]
console.log(Child.prototype.__proto__); // Super { print: [Function] }
console.log(Child.prototype.constructor); // [Function: Super] (Child.prototype.__proto__.constructor)
console.log(Child.prototype.__proto__.constructor)  // [Function: Super]

child = new Child(10);
console.log(child instanceof Super);  // true
console.log(child instanceof Child);  // true

console.log('-----------------------')

Child.__proto__ = Super;
Child.prototype.constructor = Child;

console.log(Child.__proto__);           // [Function: Super]
console.log(Child.prototype.__proto__); // Super { print: [Function] }
console.log(Child.prototype.constructor); // [Function: Child]
console.log(Child.prototype.__proto__.constructor)  // [Function: Super]

child = new Child(10);
console.log(child instanceof Super);  // true
console.log(child instanceof Child);  // true
