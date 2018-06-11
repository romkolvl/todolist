import { combineReducers } from 'redux';
import notes from './notes';
//import formAddNote from './formAddNote';
import types from './typesNote';
import { reducer as form } from 'redux-form';

export default combineReducers({
  notes, types, form
});
