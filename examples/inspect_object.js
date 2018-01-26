
// target 객체
var target = {
  value: "test",
  method: function() {
    console.log(this.value)
  },
  userDefinedMethod: function () {
    console.log(this.value)
  }
}

// array
var array = [1, 2, 3, 4, 5]

// obj 객체
var obj = {
  time: new Date(),
  hostname: "host",
  size: 5.2,
  bean: target,
  arr: array,
  setSize: function(size) {
    this.size = size
  }
}

// 파라미터로 주어진 객체의 속성들을 프린트, 객체 안에 대한 속성들에 대해서도 재귀적으로 호출
const print_fields = function (obj) {
  let propertyNames = Object.getOwnPropertyNames(obj)
  if (propertyNames.length === 0) {
    return
  }

  console.log("------------------------------------")
  console.log("print_fields")
  console.log(propertyNames)
  console.log("")

  // 객체가 'userDefinedMethod' 이름의 프로퍼티를 가지고 있는지 조사
  if (obj.hasOwnProperty("userDefinedMethod")) {
    console.log ("this object has \'userDefinedMethod\'")
  }

  // 객체의 모든 프로퍼티를 key / value 쌍으로 가져온다
  for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`)
  }

  // 프로퍼티들에 대해서도 재귀적으로 호출
  for (const [key, value] of Object.entries(obj)) {
    inspect_object(value)
  }
}

// 파라미터로 주어진 객체 (메소드)에 대해 메소드명 및 파라미터 개수 조사
const print_function = function (func) {

  console.log("------------------------------------")
  console.log("print_function for " + "\'" +  func.name + "\'")
  console.log("number of arguments: " + func.length)
}

var inspect_object = function (obj) {

  if (typeof obj === 'object') {
    print_fields(obj)
  }

  if (typeof obj === 'function') {
    print_function(obj)
  }
}

inspect_object(obj)