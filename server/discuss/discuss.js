const express = require("express");
const app = express();
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const { ConnectionClosedEvent } = require("mongodb");

const http = createServer();

let chatRoom = "";
let allUsers = [];

const socketIO = new Server(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

//Add this before the app.get() block
socketIO.on("connection", (socket) => {
  console.log(`status: ${socket.id} user just connected!`);

  socket.on("join_room", (data) => {
    const { username, room } = data;
    socket.join(room);
    let time = Date.now();

    socket.emit("messageRes", {
      message: `Welcome ${username}`,
      username: username,
      id: `${socket.id}${Math.random()}`,
      sodketID: socket.id,
    });

    chatRoom = room;
    allUsers.push({ id: socket.id, username, room });
    chatRoomUsers = allUsers.filter((user) => user.room === room);
    socket.to(room).emit("room_users", chatRoomUsers);
    socket.emit("room_users", chatRoomUsers);

    socket.on("message", (data) => {
      console.log(data.username, data.message);
      socketIO.in(room).emit("messageRes", data);
    });
  });
});

http.listen("4000", () => {
  console.log(`Server listening on 4000`);
});
