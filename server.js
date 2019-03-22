const express = require('express');
const bodyParser = require('body-parser');
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');

const app = express();
const port = process.env.PORT || 4000;
const server = http.createServer(app);
const io = socketIO(server);

const complaintRoutes = require('./routes/complaintRoutes')(io);

app.use(bodyParser.json());

io.on('connection', (socket) => {
    console.log('Client Connected');

    //Routes
    app.use('/api/complaints', complaintRoutes);

});

app.listen(port, () => console.log(`listening on http://localhost:${port}`));

module.exports = {app}
