const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, { 
    cors :{
        origin:"http://localhost:5173",
    },
 });

io.on("connection", (socket) => {
  socket.on("scores", (scores)=> {
    console.log(scores)
  })
});

httpServer.listen(3000, () => {
    console.log("Server is listing Port 3000")
});