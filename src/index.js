import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from 'react-redux';
import { notes } from './notesdefault';

ReactDOM.render(<App notes = {notes} />, document.getElementById('root'));
registerServiceWorker();
