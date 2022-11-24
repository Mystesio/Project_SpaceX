import React from 'react';
import ReactDOM from 'react-dom/client';
import Capsule from './Capsule';
import Launch from './Launch';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Capsule />
    <Launch />
  </React.StrictMode>
);


