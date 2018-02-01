let multiparty = require('multiparty');
let fs = require('fs');

let executor = require('./executor');

function checkAndMakeDir(path) {
  if (fs.existsSync(path) === false) {
    fs.mkdirSync(path);
  }
}

module.exports = function(app) {
  let moduleName;

  app.get('/',function(req, res){
    res.render('index.html');
  });

  app.post('/module', function(req, res, next) {
    let form = new multiparty.Form();
    
    form.on('field', function(name, value) {
      console.log('field, name: ' + name + ', value: ' + value);
    });
    
    form.on('part',function(part) {
      let size;
      
      if (part.filename) {
        moduleName = part.filename;
        size = part.byteCount;
      } else {
        part.resume();
      }
      
      console.log("Write Streaming file :" + moduleName);
      
      checkAndMakeDir(executor.userCodeDirPath);
      let writeStream = fs.createWriteStream(executor.userCodeDirPath + '/' + moduleName);
      writeStream.filename = moduleName;
      part.pipe(writeStream);

      /*
      part.on('data',function(chunk) {
       console.log(moduleName+' read '+ chunk.length + 'bytes');
      });*/
      
      part.on('end',function() {
        console.log(moduleName + ' Part read complete');
        writeStream.end();
      });
    });
    
    form.on('close', function() {
      res.redirect('/module/exec');
    });
  /*    
    // track progress
    form.on('progress',function(byteRead, byteExpected){
      console.log(' Reading total  '+ byteRead + '/' + byteExpected);
    });*/
    
    form.parse(req);
  });

  app.get('/module/exec', function (req, res, next) {
    executor.execute(executor.userCodeDirPath + '/' + moduleName);
    res.status(200).send('execution complete');
  });

  app.get('/module', function (req, res, next) {
    res.status(200).send(executor.getSubModuleIds());
  });

  app.get('/module/unload', function (req, res, next) {
    executor.unload(executor.userCodeDirPath + '/' + req.query.name);
    res.status(200).send("unload module complete");
  });
}