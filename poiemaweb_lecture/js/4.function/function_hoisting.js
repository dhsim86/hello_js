console.log(square);          // [Function: square]

var res = square(5);
console.log(res);             // 25

function square(number) {
  return number * number;
}

// ----
console.log(square2);         // undefined

var square2 = function(number) {
  return number * number;
}

console.log(square2);         // [Function: square2]
res = square2(5);             // 25
console.log(res);