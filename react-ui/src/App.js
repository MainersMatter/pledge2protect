import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation,
} from 'react-router-dom';

// font awesome imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

// page imports
import HomePage from './pages/home.page';
import PrivacyPage from './pages/privacy.page';
import NewsPage from './pages/news.page';
import ResourcesPage from './pages/resources.page';
import WhyTakePledgePage from './pages/why-take-pledge.page';
import TermsPage from './pages/terms.page';

// component imports
import Header from './components/Header/header';
import Footer from './components/Footer/footer';


const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};


function App() {
    library.add(fab);

    return (
        <div className="app-wrapper">
            <Router>
                <ScrollToTop />
                <Header />
                <main>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/why-take-pledge" component={WhyTakePledgePage} />
                        <Route path="/resources" component={ResourcesPage} />
                        <Route path="/news" component={NewsPage} />
                        <Route path="/privacy" component={PrivacyPage} />
                        <Route path="/terms-and-conditions" component={TermsPage} />
                    </Switch>
                </main>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
