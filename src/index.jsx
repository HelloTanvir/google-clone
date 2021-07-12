import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SearchTextContextProvider from './contexts/SearchTextContext';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <SearchTextContextProvider>
        <App />
    </SearchTextContextProvider>,
    document.getElementById('root')
);

reportWebVitals();
