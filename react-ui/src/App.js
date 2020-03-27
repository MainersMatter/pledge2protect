import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import HomeUIWrapper from './components/home-ui-wrapper';

import './base.css';


function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res=>res.json()).then(data=>{
      setCurrentTime(data.time); 
    })
  },[]);

  library.add(fab);

  return (
    <div className="app-wrapper">
      <HomeUIWrapper />      
    </div>
  );
}

export default App;
