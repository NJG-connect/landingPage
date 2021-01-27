import React from 'react';
import { Toast } from './components';
import { ToastProvider } from './contexts/ToastContext';
import { HomeScreen } from './screens';

function App() {
  return (
    <ToastProvider>
      <Toast />
      <HomeScreen />
    </ToastProvider>
  )
}

export default App;
