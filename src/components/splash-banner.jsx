import React from 'react';

import logo from '../assets/logo-colored-horizontal.png';




function HomeUIWrapper() {
  return (
    <div className="home-ui-wrapper">
      <header className="splash-header">
        <img src={logo} className="logo" alt="Nainers Matter logo" />
        <p>
          Full site coming soon!
        </p>
      </header>
    </div>
  );
}

export default HomeUIWrapper;