import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducer';
import thunk from 'redux-thunk';

const actionLog = store => next => action => {
    //console.log('action: ', action.type);
    next(action);
  }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    name: 'Streambuck'
  })
  : compose;

const store = createStore(reducer, {}, composeEnhancers(applyMiddleware(thunk, actionLog)));

window.store = store;
export default store;
