import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from '../assets/PPME_Opt2_Horiz_green-01.svg';
import MainContentBlock from './main-content-block';

import './styles.home-ui-wrapper.scss';


function HomeUIWrapper() {
    return (
        <div className="home-ui-wrapper">
        <section className="splash-banner">
            <img src={logo} alt="Pledge to Protect Maine" />
        </section>
        <section className="blurb-section">
            <p className="blurb">
                <b className="core-branding">PledgetoProtect<span className="highlight-branding">ME</span></b>, a network of Maine developers, business analysts, UI/UX designers, entrepreneurs, government officials, and public health professionals is rapidly developing high impact innovations to flatten the curve of <b>COVID-19</b> and save Maine lives.
            </p>
            <p className="blurb">
                Together we are creating a digital hub, where Mainers take a pledge to normalize and reward physical distancing, and in turn, protect the vulnerable. Exemplifying the state’s motto Dirigo, I lead, <b className="core-branding">PledgetoProtect<span className="highlight-branding">ME</span></b> empowers individuals to protect and care for each other, safeguarding basic human needs in times of challenge.
            </p>
        </section>
        <section className="cta-section">
            <MainContentBlock />
            { /*
            <div className="socialize-section">
              <span class="socialize-blurb">{'Share'}</span>
              <ul className='social-network-links'>
                <li className="social-link-item">
                  <a href="https://www.facebook.com" target="_blank">
                    <i className="facebook fa-facebook-square"></i>
                  </a>
                </li>
                <li className="social-link-item">
                  <a href="https://www.facebook.com" target="_blank">
                    <FontAwesomeIcon style={{color: 'green'}} icon={["fab", "facebook-square"]} />
                  </a>
                </li>
              </ul>
            </div>
            */ }
        </section>
    </div>
  );
}

export default HomeUIWrapper;
