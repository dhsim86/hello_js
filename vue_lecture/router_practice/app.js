var Foo = {
  template: '<div>foo</div>'
}

var Bar = {
  template: '<div>bar</div>'
}
/*
var routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]
*/
var router = new VueRouter({
  //routes
})

router.addRoutes([ { path: '/foo', component: Foo }])
router.addRoutes([ { path: '/bar', component: Bar }])

var app = new Vue({
  router
}).$mount('#app')

function checkLogin() {
  return axios.get('http://localhost:10080/monitor/l7check');
}

router.beforeEach((to, from, next) => {
  checkLogin().then(response => {
    if (response.data == 'OK') {
      next();
    } else {
      next();
    }
  }).catch(error => {
    next();
  });
  //authenticationInquiryService.isAuthenticated$(to.params.appKey).subscribe(result => next(), e => toastLogin.gotoLoginPage())
})