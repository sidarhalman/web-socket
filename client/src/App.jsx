import { useEffect, useState } from 'react'
import './App.css';
import io from "socket.io-client";
import Input from './components/Input';

function App() { 
  
  const socket = io("localhost:3000");
  
  function connectSocket(){
    socket.on('connection', (socket)=>{
      console.log(socket)
    });
  };
  function handleInput(event){
    let { name, value} = event.target
    console.log({[name]:value })
  }

  useEffect(()=>{
    connectSocket();
  }, [])
  
  return (
    <>
      <h1>React Multiplayer Dashboard</h1>
      <Input name="name" placeholder="Name" handleInput={handleInput}></Input>
      <Input name="score" placeholder="score" handleInput={handleInput}></Input>
    </>
  )
}

export default App
