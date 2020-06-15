function foo() {
    console.log("foo's this: ", this);  // Object [global]

    function bar() {
        console.log("bar's this: ", this);  // Object [global]
    }
    bar();
}
foo();

var value = 1;
var obj = {
    value: 100,
    foo: function() {
        console.log("foo's this: ", this);  // { value: 100, foo: [Function: foo] }
        console.log("foo's this.value: ", this.value);  // 100

        function bar() {
            console.log("bar's this: ", this);  // Object [global]
            console.log("bar's this.value: ", this.value);  // undefined
        }
        bar();
    }
}
obj.foo();