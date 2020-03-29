import React from 'react';

import MainContentBlock from './main-content-block';

import './styles.home-ui-wrapper.scss';
import PledgeForm from "./Pledge/PledgeForm";


function HomeUIWrapper() {
    return (
        <div className="home-ui-wrapper">
            <MainContentBlock />
            <PledgeForm/>
        </div>
    );
}

export default HomeUIWrapper;
