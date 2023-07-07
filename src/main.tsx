import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import ReactDOM from 'react-dom/client';
import ThemeProvider from 'theme/context/theme-context';

import App from './App';

import './styles/less/_app.less';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
