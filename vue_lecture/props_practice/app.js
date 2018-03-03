Vue.component('child-component', {
  props: ['passedData'],
  template: '<p>{{ passedData }}</p>'
});

Vue.component('slibing-component', {
  props: ['passedData'],
  template: '<p> {{ passedData }}</p>'
})

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue! passed from Parent Component',
    anotherMessage: 'Hello! slibing'
  }
})