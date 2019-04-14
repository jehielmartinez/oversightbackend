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
const publicationRoutes = require('./routes/publicationRoutes');
const authRoutes = require('./routes/authRoutes');

//DB Connection
const connectionString = process.env.DATABASE_URI || 'mongodb://localhost:27017/oversight';
mongoose.connect(connectionString, { useNewUrlParser: true });


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
app.use('/server/complaints', complaintRoutes);
app.use('/server/publications', publicationRoutes);
app.use('/server/auth', authRoutes);

io.on('connection', (socket) => {
    console.log('Client Connected');
});

//index.html client render
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('oversightclient/build'));
  
    app.get('/', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'oversightclient', 'build', 'index.html'));
    });
  }

server.listen(port, () => console.log(`listening on http://localhost:${port}`));