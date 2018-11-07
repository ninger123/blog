// 导入模块
var http = require('http');
var qs = require("querystring");
var url = require('url');
var fs = require('fs');//用来进行文件读写的

//创建简单的服务器
var server = http.createServer(function(req,res){
    console.log("创建了服务器");
    //提取请求信息
    var urlObj = url.parse(req.url,true);
    var path = req.url;
    var method = req.method;
    var params = {};
    // 提取请求参数
    if(urlObj.query){
        params = qs.parse(urlObj.query);
        // 这里就看具体要提取什么参数了
    }

    // 根据路径进行不同文件的返回
    console.log("http路径"+path);
    if(path === "/"){
        fs.readFile("index.html",function(error,data){
            res.writeHead(200,{
                "Content-Type":'text/html'
            });
            res.end(data);
        });
    }else if(path === "/css"){
        fs.readFile("css/style.css",function(error,data){
            res.writeHead(200,{
                "Content-Type":"text/css"
            });
            res.end(data);
        });
    }else if(path === "/js"){
        fs.readFile("index.js",function(error,data){
            res.writeHead(200,{
                "Content-Type":"text/javascript"
            });
            res.end(data);
        });
    }else{
        res.statusCode = 404
        res.end()
    }
});
server.listen(8080);
console.log(8080);