import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter';
import Team from './Team';
import User from './User';
import Friends from './Friends';

function App() {
  function handleClick(){
    alert ('button click');
  }
  const handleClick2=()=>{
    alert('alert btn 2');
  }
  return (
    <>
     
     
      <h2> React core concept part 2</h2>

      <Friends></Friends>

      <User></User>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={()=> {alert('third btn clicked')}}>third</button>

      
    </>
  )
}

export default App
