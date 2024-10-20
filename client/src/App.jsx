import { useEffect, useState } from 'react'
import './App.css';
import io from "socket.io-client";
import Input from './components/Input';

function App() { 
  const [score, setScore] = useState({})
  const socket = io("localhost:3000");
  
  function connectSocket(){
    socket.on('connection', (socket)=>{
      console.log(socket, "client")
    });
  };
  function handleInput(event){
    let { name, value} = event.target
    const currentObj = { [name] :value };
    setScore((prev) =>({...prev, ...currentObj}))
  }

  function sendScore() {
    console.log(score)
    socket.emit("scores", score)
  };  
  console.log(score)

  useEffect(()=>{
    connectSocket();
  }, [])
  
  return (
    <>
      <h1>React Multiplayer Dashboard</h1>
      <Input name="name" placeholder="Name" handleInput={handleInput}></Input>
      <Input name="score" placeholder="Score" handleInput={handleInput}></Input>
      <button onClick={()=>{sendScore()}}>Send</button>
    </>
  )
}

export default App
