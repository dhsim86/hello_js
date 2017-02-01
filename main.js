/**
 * Created by Dongho on 2017. 2. 1..
 */
var http = require("http");

http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("Hello World!\n");
    res.end();
}).listen(8080);