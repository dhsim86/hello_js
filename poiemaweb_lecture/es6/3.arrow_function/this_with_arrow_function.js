function Prefixer(prefix) {
    this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function (arr) {
    return arr.map(function (x) {
        // this => window / global
        return this.prefix + ' '  + x;
    });
}

var pre = new Prefixer('Hi');
console.log(pre.prefixArray(['Lee', 'Kim']));

// Lexical this

Prefixer.prototype.prefixArray = function (arr) {
    return arr.map(x => `${this.prefix} ${x}`);
};
console.log(pre.prefixArray(['Lee', 'Kim']));

const normal = function () { return this.x; };
const arrow = () => this.x;

console.log(normal.call({ x: 10 })); // 10
console.log(arrow.call({ x: 10 }));  // 1

// method  lexical this
const person = {
    name: 'Lee',
    sayHi: () => console.log(`Hi ${this.name}`)
}
person.sayHi(); // Hi undefined

// shorthand method
const person2 = {
    name: 'Lee',
    sayHi() {
        console.log(`Hi ${this.name}`);
    }
}
person2.sayHi(); // Hi Lee