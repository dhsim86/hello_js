var foo = function multiply(a, b) {
  if (b == 1) {
    return a;
  }

  return a + multiply(a, b - 1)
}

var bar = function(a, b) {
  return a * b;
}

console.log(foo(10, 5));
// console.log(multiply(10, 5)); reference error

var square = new Function('number', 'return number * number');
console.log(square(3))