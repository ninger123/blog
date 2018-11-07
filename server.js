// ����ģ��
var http = require('http');
var qs = require("querystring");
var url = require('url');
var fs = require('fs');//���������ļ���д��

//�����򵥵ķ�����
var server = http.createServer(function(req,res){
    console.log("�����˷�����");
    //��ȡ������Ϣ
    var urlObj = url.parse(req.url,true);
    var path = req.url;
    var method = req.method;
    var params = {};
    // ��ȡ�������
    if(urlObj.query){
        params = qs.parse(urlObj.query);
        // ����Ϳ�����Ҫ��ȡʲô������
    }

    // ����·�����в�ͬ�ļ��ķ���
    console.log("http·��"+path);
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