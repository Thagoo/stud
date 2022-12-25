let date = new Date();
let time_h = date.getHours();
let time_m = date.getMinutes();
let time = `${time_h}:${time_m}`;

let chatRoom = "";
let allUsers = [];

function socket(socketIO) {
  socketIO.on(`connection`, (socket) => {
    console.log(`status: ${socket.id} user just connected!`);

    socket.on("join_room", (data) => {
      const { username, room } = data;
      socket.join(room);

      chatRoom = room;
      allUsers.push({ id: socket.id, username, room });
      console.log(allUsers);
      chatRoomUsers = allUsers.filter((user) => user.room === room);
      socketIO.to(room).emit("room_users", chatRoomUsers);
      socket.emit("room_users", chatRoomUsers);
      socket.on("message", (data) => {
        console.log(data.username, data.message);
        socketIO.in(room).emit("messageRes", data);
      });
    });
  });
}
module.exports = socket;
