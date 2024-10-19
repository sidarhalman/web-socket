const socket = io("http://localhost:3000") 

socket.on("connect",() => {
    console.log("web socket connected!")
});
socket.on("message", (data) => {
    console.log(data)
    socket.emit("message", "Hello! i am there! bnyxmncb jjj" );
}) 