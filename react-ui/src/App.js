import React, { useEffect } from 'react';
import {  
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from 'react-router-dom';

// need to convert into home.page.jsx
import HomeUIWrapper from './components/home-ui-wrapper';

// page imports
import PrivacyPage from './pages/privacy.page.jsx';
import NewsPage from './pages/news.page.jsx';
import ResourcesPage from './pages/resources.page.jsx';
import WhyTakePledgePage from './pages/why-take-pledge.page.jsx';
import TermsPage from './pages/terms.page';

// component imports
import Header from './components/header';
import Footer from './components/footer/footer';

// font awesome imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import './base.scss';
import './buttons.scss';
import './utils.scss';


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {
  library.add(fab);
  
  return (
  	<div className="app-wrapper">
      <Router>
        <ScrollToTop />
      	<Header />      	
        <Switch>
      		<Route exact path='/' component={HomeUIWrapper} />
      		<Route  path='/why-take-pledge' component={WhyTakePledgePage} />
      		<Route  path='/resources' component={ResourcesPage} />
      		<Route  path='/news' component={NewsPage} />
      		<Route  path='/privacy' component={PrivacyPage} />
      		<Route path='/terms-and-conditions' component={TermsPage} />
        </Switch>
        <Footer />
      </Router>

    </div>
);
}

export default App;
