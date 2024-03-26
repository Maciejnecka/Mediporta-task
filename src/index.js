import React from 'react';
import ReactDOM from 'react-dom/client';
import { Reset } from 'styled-reset';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './styled/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Reset />
    <GlobalStyles />
    <App />
  </React.StrictMode>
);

reportWebVitals();
