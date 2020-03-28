import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import './base.scss';
import './buttons.scss';

import HomeUIWrapper from './components/home-ui-wrapper';


function App() {
  library.add(fab);

  return (
    <div className="app-wrapper">
      <HomeUIWrapper />
    </div>
  );
}

export default App;
