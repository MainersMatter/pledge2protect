import React from 'react';

import logo from '../assets/logo-colored-horizontal.png';
import '../styles/App.css';



function HomeUI() {
  return (
    <div className="HomeUI">
      <header className="splash-header">
        <img src={logo} className="logo" alt="Nainers Matter logo" />
        <p>
          Full site coming soon!
        </p>
      </header>
    </div>
  );
}

export default HomeUI;