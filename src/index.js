import React from 'react';
import ReactDOM from 'react-dom/client';
import { Reset } from 'styled-reset';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './styled/GlobalStyles';
import { Provider } from 'react-redux';
import { store } from './components/redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Reset />
    <GlobalStyles />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
