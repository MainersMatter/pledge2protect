import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import HomeUIWrapper from './components/home-ui-wrapper';

import './base.css';


function App() {
  library.add(fab);

  return (
    <div className="app-wrapper">
      <HomeUIWrapper />
    </div>
  );
}

export default App;
