let multiparty = require('multiparty');
let fs = require('fs');

function checkUserCodeDir(path) {
  if (fs.existsSync(path) === false) {
    fs.mkdirSync(path)
  }
}

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

function executeUserCode(filePath) {
  let userApp = require(filePath)

  // user 코드 실행 (userDefinedMethod 가 우리가 지정한 메소드 원형이라 가정)
  console.log('----- user code execution -----')
  userApp.userDefinedMethod("arg1", 1, 2.5, { value: "jsonTest" });

  console.log('----- user code execution with proxy -----')
  let proxy = createProxy(userApp)
  proxy.userDefinedMethod("arg1", 1, 2.5, { value: "jsonTest" });
}

function deleteModule(moduleName) {
  let solvedName = require.resolve(moduleName);
  let nodeModule = require.cache[solvedName];

  if (nodeModule) {

    for (let i = 0; i < nodeModule.children.length; i++) {
      let child = nodeModule.children[i];
      deleteModule(child.filename)
    }
    delete require.cache[solvedName];
  }
}

function searchCache(moduleName, callback) {
  let mod = require.resolve(moduleName);

  if (mod && ((mod = require.cache[mod]) !== undefined)) {
    (function traverse (mod) {
      mod.children.forEach(function (child) {
        traverse(child);
      });
      callback(mod);
    }(mod));
  }
}

function purgeCache(moduleName) {
  searchCache(moduleName, function(mod) {
    delete require.cache[mod.id];
  });

  Object.keys(module.constructor._pathCache).forEach(function (cacheKey) {
    console.log(cacheKey);
    if (cacheKey.indexOf(moduleName) > 0) {
      delete module.constructor._pathCache[cacheKey];
    }
  });
}

module.exports = function(app)
{
  let userDirPath = './user_codes'
  let filename;

  app.get('/',function(req, res){
    res.render('index.html')
  });

  app.get('/user-code', function (req, res, next) {
    executeUserCode(userDirPath + '/' + filename)
    res.status(200).send('execution complete');
  });

  app.post('/user-code', function(req, res, next) {
    let form = new multiparty.Form();
    
    form.on('field', function(name, value) {
      console.log('field, name: ' + name + ', value: ' + value);
    });
    
    form.on('part',function(part) {
      let size;
      
      if (part.filename) {
        filename = part.filename;
        size = part.byteCount;
      } else {
        part.resume();
      }
      
      console.log("Write Streaming file :" + filename);
      
      checkUserCodeDir(userDirPath)
      let writeStream = fs.createWriteStream(userDirPath + '/' + filename);
      writeStream.filename = filename;
      part.pipe(writeStream);
      /*
      part.on('data',function(chunk) {
       console.log(filename+' read '+ chunk.length + 'bytes');
      });*/
      
      part.on('end',function() {
        console.log(filename + ' Part read complete');
        writeStream.end()
      });
    });
    
    form.on('close', function() {
      res.redirect('/user-code')
    });
  /*    
    // track progress
    form.on('progress',function(byteRead, byteExpected){
      console.log(' Reading total  '+ byteRead + '/' + byteExpected);
    });*/
    
    form.parse(req);
  });

  app.get('/user-code-delete', function (req, res, next) {
    purgeCache(userDirPath + '/' + req.query.name);
    res.status(200).send("unload module complete");
  });
}