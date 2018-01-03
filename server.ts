import * as express from 'express';
import * as http from 'http';
import * as sio from 'socket.io';


const app = express();
const server = http.createServer(app);
const io = sio(server);

app.use(express.static(__dirname + '/public'));

io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});

server.listen(3000, function(){
    console.log('Server listening on port 3000');
});