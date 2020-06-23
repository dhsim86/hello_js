var data = { a: 1 }

var vm = new Vue({
	data: data
})

// Vue 인스턴스는 data 객체에 있는 모든 속성을 프록시 처리한다.

console.log(vm.a === data.a) // true

vm.a = 2
console.log(data.a) // 2

data.a = 3
console.log(vm.a) // 3

// 단, data에 있는 속성들은 인스턴스가 생성할 때 존재하는 것들만 반응형이다.

vm.b = 'hi'	// b가 변경되어도 화면이 갱신되지 않는다.
// 따라서 이 경우에는 빈 값등으로 미리 data에 생성해두어야 한다.


// Object.freeze를 건 경우에는 반응형으로 되지 않는다.
var obj = {
	foo: 'bar'
}

Object.freeze(obj)
new Vue({
	el: '#app',
  data: obj
})


// Vue 인스턴스는 data 속성뿐만 아니라 다른 속성 및 메소드를 제공한다.
var data = { a: 1 }
var vm = new Vue({
	el: '#example',
  data: data
})

console.log(vm.$data === data) // true
console.log(vm.$el === document.getElementById('example')) // true

vm.$watch('a', function (newValue, oldValeu) {
	console.log('a changed!')
})

var vm2 = new Vue({
	data: {
  	a: 1
  },
  created: function() {
  	console.log('created invoked, a is: ' + this.a)
  }
})

