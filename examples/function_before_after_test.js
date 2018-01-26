Function.prototype.before = function (callback) {
  var that = this;
  return (function() {
      callback.apply(this, arguments);
      return (that.apply(this, arguments));
  });
}

Function.prototype.after = function (callback) {
  var that = this;
  return (function() {
      var result = that.apply(this, arguments);
      callback.apply(this, arguments);
      return (result);
  });
}

// 1. 타겟 메소드만 호출
function test(a) {
  console.log("Test function, parameter: ", a);
}

test(0);
console.log("--------------------------------")

// 2. Before + 타겟 메소드 호출
var beforeUsed = test.before(function(a) {
  console.log("Before. parameter: ", a);
});

beforeUsed(1);
console.log("--------------------------------")

// 3. 타겟 메소드 + After 호출
var afterUsed = test.after(function(a) {
  console.log("After. parameter: ", a);
});
afterUsed(2);
console.log("--------------------------------")

// 4. Before + 타겟 메소드 + After 호출
var around = test.before(function(a) {
  console.log("Before. parameter: ", a);
}).after(function(a) {
  console.log("After. parameter: ", a);
});
around(3);