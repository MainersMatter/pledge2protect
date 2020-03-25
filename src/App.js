import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
// import './App.css';
import HomeUI from './UIs/home-ui';


function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(()=>{
    fetch('/time').then(res=>res.json()).then(data=>{
      setCurrentTime(data.time); 
    })
  },[]);
  return (
    <div className="App">
      <HomeUI />
      <p>The current time is {currentTime}.</p>
    </div>
  );
}

export default App;
