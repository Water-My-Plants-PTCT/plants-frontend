import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware} from 'redux'

import {reducer} from './store/reducer'
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'

ReactDOM.render(
  <Provider>
      <Router>
        <App/>
      </Router>,
      </Provider>,
  document.getElementById('root')
);
