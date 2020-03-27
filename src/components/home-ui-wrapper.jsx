import React from 'react';

import logo from '../assets/MainersMatter_logo_Vertical_color.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function HomeUIWrapper() {
  return (
    <div className="home-ui-wrapper">      
      <section className="splash-banner">        
        <img src={logo} className="logo" alt="Nainers Matter logo" />        
      </section>
      <section className="about">
        <p className="about-blurb">
          {'MainersMatter, a network of Maine developers, business analysts, UI/UX designers, entrepreneurs, government officials, and public health professionals is rapidly developing high impact innovations to flatten the curve of COVID-19 and save Maine lives. Together we are creating a digital hub, where Mainers take a pledge to normalize and reward physical distancing, and in turn, protect the vulnerable. Exemplifying the state’s motto Dirigo, I lead, MainersMatter empowers individuals to protect and care for each other, safeguarding basic human needs in times of challenge.'}
        </p> 
      </section>
      <section className="pledge">
        <form className="pledge-form">
          <input type="email" text="Your Email" />
          <button className="cta-btn">{'#Pledge2ProtectME'}</button>
        </form>
        <div className="socialize">
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
      </section>      
    </div>
  );
}

export default HomeUIWrapper;