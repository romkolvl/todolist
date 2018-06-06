import { ADD_NOTE, DELETE_NOTE, CHANGE_INPUT, CLEAR_FORM } from '../constatnts';

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

export function changeInputValue(name, value) {
  return {
    type: CHANGE_INPUT,
    payload: { name, value }
  }
}

export function clearForm() {
  return {
    type: CLEAR_FORM,
  }
}
