import React from 'react';
import { Toast } from './components';
import { ToastProvider } from './contexts/ToastContext';
import { HomeScreen, ContactScreen } from './screens';
import smoothscroll from './lib/smoothscroll.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

smoothscroll.polyfill();

function App() {
  return (
    <ToastProvider>
      <Toast />
      <Router>
        <Switch>
          <Route path="/contact/:id" component={ContactScreen} />
          <Route path="/contact" component={ContactScreen} />
          <Route path="/" component={HomeScreen} />
        </Switch>
      </Router>
    </ToastProvider >
  )
}

export default App;
