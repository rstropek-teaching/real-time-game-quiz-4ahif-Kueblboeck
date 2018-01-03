"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var http = require("http");
var sio = require("socket.io");
var app = express();
var server = http.createServer(app);
var io = sio(server);
app.use(express.static(__dirname + '/public'));
io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});
server.listen(3000, function () {
    console.log('Server listening on port 3000');
});
