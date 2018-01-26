const reflection = require('js-reflection');
 
function testObj() { };
testObj.prototype = { hello: 'test', sayHello: function() {} };

var TestObj = new testObj()
 
const reflectionObj = new reflection.Obj(TestObj);
console.log(reflectionObj.hasProperty('hello'));			  //true 
console.log(reflectionObj.hasProperty('hello', false));	//false 

console.log(reflectionObj.hasProperty('sayHello'));		  //false 
console.log(reflectionObj.hasMethod('sayHello'));       // true

console.log(reflectionObj.getName());