import { ADD_NOTE, DELETE_NOTE, CHANGE_INPUT, CLEAR_FORM, LOAD_TYPES, LOAD_TYPES_SUCCESS, LOAD_TYPES_ERROR, LOAD_TYPES_REQUEST } from '../constatnts';
import axios from 'axios';

export function deleteNote(id) {
  return {
    type: DELETE_NOTE,
    payload: { id }
  };
}

export function addNote(note) {
  return {
    type: ADD_NOTE,
    payload: { note: { ...note } }
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

export function loadTypesRequest () {
  return {
    type: LOAD_TYPES_REQUEST,
  }
}
export function loadTypesSuccess (newTypes) {
  const types = [...newTypes];
  return {
    type: LOAD_TYPES_SUCCESS,
    payload: types
  }
}
export function loadTypesError () {
  return {
    type: LOAD_TYPES_ERROR,
  }
}

export function loadTypes() {
  return (dispatch) => {
    dispatch(loadTypesRequest())
    axios.get('../types.json')
    .then(res => {
      const newTypes = res.data;
      setTimeout(() => {
        dispatch(loadTypesSuccess(newTypes))
      }, 2000)
    })
    .catch(error => {
      dispatch(loadTypesError())
    });
  }
}
