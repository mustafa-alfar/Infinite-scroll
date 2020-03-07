import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import ErrorBoundary from '../src/components/ErrorBoundary';

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('root')
);
