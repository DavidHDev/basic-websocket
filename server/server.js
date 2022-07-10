const express = require('express');
const cors = require('cors');

const app = express().use(cors());
const server = app.listen(80, () => console.log('Listening on port 80'));

const io = require('socket.io')(server, {
    cors: { origin: "http://localhost:3000" }
});

io.on('connect', (socket) => {
    console.log(`Connected! Id: ${socket.id}`);
    socket.on('message', (data) => console.log(`Received: ${data}`));
});