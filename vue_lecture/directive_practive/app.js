var app = new Vue({
  el: '#app', // 어떤 엘리먼트에 적용을 할 지 정합니다
  // data 는 해당 뷰에서 사용할 정보를 지닙니다
  data: {
    name: '<i>Vue</i>',
    visible: true,
    value: 5,
    sulhyun: false,
    imgSrc0: "http://cfile24.uf.tistory.com/image/243807345769E5A0100C97",
    imgSrc1: "http://cfile27.uf.tistory.com/image/263CCB345769E5A30848E6",
    todos: [
      { text: "spring framework" },
      { text: "vue.js"}, 
      { text: "design pattern"},
    ],
    number: 0,
  },
  methods: {
    increment: function() {
      this.number++;
    },
    decrement: function() {
      this.number--;
    }
  },
});

