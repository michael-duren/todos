import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { GeneralContextProvider } from './context/GeneralContext.tsx';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GeneralContextProvider>
      <Toaster />
      <App />
    </GeneralContextProvider>
  </React.StrictMode>
);
