const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
app.use(express.static(path.resolve("./public")))
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile("/public/index.html");
})

io.on("connection", socket => {
    console.log("A user connected", socket.id);
})

server.listen(3000, () => console.log("Listening on Port: 3000"));

