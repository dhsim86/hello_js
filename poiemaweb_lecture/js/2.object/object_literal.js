var emptyObject = {};
console.log(typeof emptyObject)

var person = {
    name: 'Lee',
    gender: 'male',
    sayHello: function () {
        console.log('Hi! My name is ' + this.name)
    }
}

console.log(typeof person)
console.log(person)

person.sayHello()