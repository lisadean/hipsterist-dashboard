import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
require('bootstrap');
global.jquery = require('jquery');

ReactDOM.render(
    <App />,
    document.getElementById('root'));

registerServiceWorker();
