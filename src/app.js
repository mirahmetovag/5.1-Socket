require('dotenv/config');
const http = require('http');
const express = require('express');
const {Server} = require('socket.io');
const cookie = require('cookie-parser');
const routers = require('./routes');

const app = express();
const server = http.createServer(app);

const io = new Server(server);

app.use(express.json());
app.use(cookie());
app.use(express.urlencoded({extended: true}));

app.use(express.static(process.cwd() + "/src/public"));

app.set("view engine", "ejs");
app.set("views", "src/views");

app.use(routers);

const PORT = process.env.PORT || 4445;

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})

// io.on('connection', (socket) => {
//     console.log('User connected');

//     socket.on("message", (data) => {
//         socket.emit('message', data)
//     })
// })