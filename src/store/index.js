import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer';

const actionLog = store => next => action => {
    console.log('action: ', action.type);
    next(action);
  }

const store = createStore(reducer, {}, applyMiddleware(actionLog));

window.store = store;
export default store;
