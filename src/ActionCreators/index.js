import { ADD_NOTE, DELETE_NOTE, CHANGE_INPUT } from '../constatnts';

export function deleteNote(id) {
  return {
    type: DELETE_NOTE,
    payload: { id }
  };
}

export function addNote(note) {
  return {
    type: ADD_NOTE,
    payload: { note: {...note} }
  };
}

export function changeInputValue(nameInput, valueInput) {
  return {
    type: CHANGE_INPUT,
    payload: { nameInput, valueInput }
  }
}
