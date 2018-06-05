import { combineReducers } from 'redux';
import notes from './notes';
import formAddNote from './formAddNote';

export default combineReducers({
  notes, formAddNote
});