var express = require("express"),
    app = express(),
    server = require("http").createServer(app),
    io = require("socket.io").listen(server);
    
    server.listen(process.env.PORT, process.env.IP);
    
    //server.listen(8000);
    
    app.get("/", function(req, res){
        res.sendfile(__dirname + "/index.html");    
    });
    
    io.sockets.on('connection', function(socket){
        socket.on('sendMessage', function(data){
            io.sockets.emit('newMessage', {msg : data})
        });
    });