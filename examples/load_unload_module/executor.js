let decache = require('./decache');

function Proxy(target_func) {
  this.target_func = target_func
  this.before_method = function () {
    console.log("before: " + new Date())
  }
  this.after_method = function () {
    console.log("after: " + new Date())
  }
  this.userDefinedMethod = function () {
    this.before_method()
    // 메소드 호출되면 파라미터를 그대로 타겟 메소드로 패스한다.
    this.target_func.apply(null, arguments)
    this.after_method()
  }
}

function createProxy(obj) {
  if (obj.hasOwnProperty("userDefinedMethod")) {
    if (typeof obj.userDefinedMethod === 'function') {
      // bind를 통해 타겟 메소드가 호출될 때, this가 obj 객체를 참조하도록 한다.
      var proxy = new Proxy(obj.userDefinedMethod.bind(obj))
      return proxy
    }
  }
  return obj
}

function executeModule(moduleName) {
  let userApp = require(moduleName)

  // user 코드 실행 (userDefinedMethod 가 우리가 지정한 메소드 원형이라 가정)
  console.log('----- user code execution with proxy -----')
  let proxy = createProxy(userApp)
  proxy.userDefinedMethod("arg1", 1, 2.5, { value: "jsonTest" });
}

function getSubModuleIds() {
  let moduleIds = [];

  for (let idx in module.children) {
    moduleIds.push(module.children[idx].id)
  }

  return moduleIds;
}

module.exports = {
  userCodeDirPath: './user_codes',
  execute: executeModule,
  unload: decache,
  getSubModuleIds: getSubModuleIds
};
