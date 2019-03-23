const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const socketIO = require('socket.io');
const http = require('http');


const app = express();
const port = process.env.PORT || 4000;
const server = http.createServer(app);
const io = socketIO(server);

//Require Routes
const complaintRoutes = require('./routes/complaintRoutes')(io);

//DB Connection
mongoose.connect('mongodb://localhost:27017/oversight', { useNewUrlParser: true });


var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

//BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(allowCrossDomain);  

//API Routes
app.use('/api/complaints', complaintRoutes);

io.on('connection', (socket) => {
    console.log('Client Connected');
});

server.listen(port, () => console.log(`listening on http://localhost:${port}`));