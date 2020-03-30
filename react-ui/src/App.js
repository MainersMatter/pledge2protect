import React from 'react';
import { Switch, Route } from 'react-router-dom';

// need to convert into home.page.jsx
import HomeUIWrapper from './components/home-ui-wrapper';

// page imports
import PrivacyPage from './pages/privacy.page.jsx';
import ContactUsPage from './pages/contact-us.page.jsx';
import NewsPage from './pages/news.page.jsx';
import ResourcesPage from './pages/resources.page.jsx';
import WhyTakePledgePage from './pages/why-take-pledge.page.jsx';

// component imports
import Header from './components/header';
import Footer from './components/footer/footer';

// font awesome imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import './base.scss';
import './buttons.scss';
import './utils.scss';



function App() {
	library.add(fab);
	return (
  	<div className="app-wrapper">
    	<Header />
    	<Switch>
    		<Route exact path='/' component={HomeUIWrapper} />
    		<Route  path='/why-take-pledge' component={WhyTakePledgePage} />
    		<Route  path='/resources' component={ResourcesPage} />
    		<Route  path='/news' component={NewsPage} />
    		<Route  path='/contact-us' component={ContactUsPage} />
    		<Route  path='/privacy' component={PrivacyPage} />
	    </Switch>
      <Footer />
    </div>
);
}

export default App;
