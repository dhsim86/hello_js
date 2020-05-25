// arguments

function multiply(x, y) {
  console.log(arguments);
  return x * y;
}

multiply();
multiply(1);
multiply(1, 2);
multiply(1, 2, 3);

function sum() {
  var res = 0;

  for (var i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }

  return res;
}

console.log(sum());
console.log(sum(1, 2));
console.log(sum(1, 2, 3));

// caller

function foo(func) {
  var res = func();
  return res;
}

function bar() {
  return 'caller: ' + bar.caller;
}

console.log(foo(bar));
console.log(bar());