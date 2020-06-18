var Person = (function() {

    function Person(name) {
        this._name = name;
    }

    Person.prototype.sayHi = function() {
        console.log('Hi! ' + this._name);
    };

    return Person;
}());

var me = new Person('Lee');
me.sayHi();
console.log(me instanceof Person);