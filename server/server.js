const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const socket = new Server(httpServer, { 
    cors :{
        origin:"http://127.0.0.1:5500",
    },
 });

socket.on("connection", (socket) => {
  console.log("web socket connected");
  socket.emit("message", "Hello!" );
  socket.on("message", (data) => {
      console.log(data)
  })

});

httpServer.listen(3000, ()=>{
    console.log("Server is listing Port 3000")
});