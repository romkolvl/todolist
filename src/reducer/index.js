import { combineReducers } from 'redux';
import notes from './notes';
import formAddNote from './formAddNote';
import types from './typesNote';

export default combineReducers({
  notes, formAddNote, types
});