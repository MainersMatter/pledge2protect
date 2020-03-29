import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import HomeUIWrapper from './components/home-ui-wrapper';
import Header from './components/header';
import Footer from './components/footer/footer';

import './base.scss';
import './buttons.scss';
import './utils.scss';



function App() {
    library.add(fab);

    return (
        <div className="app-wrapper">
            <Header />
            <HomeUIWrapper />
            <Footer/>
        </div>
    );
}

export default App;
