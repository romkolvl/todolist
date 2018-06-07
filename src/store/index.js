import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer';
import thunk from 'redux-thunk';

const actionLog = store => next => action => {
    console.log('action: ', action.type);
    next(action);
  }

const store = createStore(reducer, {}, applyMiddleware(thunk, actionLog));

window.store = store;
export default store;
