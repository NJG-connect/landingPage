import React, { lazy, Suspense, useEffect } from 'react';
import { Toast } from './components';
import { ToastProvider } from './contexts/ToastContext';
import smoothscroll from './lib/smoothscroll.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactGA from 'react-ga';
import Loading from './scenes/Loading';

const HomeScreen = lazy(() => import('./screens/HomeScreen'));
const ContactScreen = lazy(() => import('./screens/ContactScreen'));

smoothscroll.polyfill();

function App() {

  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS || '');
    ReactGA.pageview(window.location.pathname);
  }, [])


  return (
    <ToastProvider>
      <Toast />
      <Router>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/contact/:id" component={ContactScreen} />
            <Route path="/contact" component={ContactScreen} />
            <Route path="/" component={HomeScreen} />
          </Switch>
        </Suspense>
      </Router>
    </ToastProvider >
  )
}

export default App;
