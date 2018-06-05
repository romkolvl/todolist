import { notes } from '../notesdefault';
import { ADD_NOTE, DELETE_NOTE } from '../constatnts';

const localNotes = JSON.parse(localStorage.getItem('notes'));
const notesMap = (localNotes && localNotes.length) ? [...localNotes] : [...notes];

export default (notesState = notesMap, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_NOTE:
      localStorage.clear();
      const resultArr = [ ...notesState, payload.note ];
      let serialNote = JSON.stringify(resultArr);
      localStorage.setItem('notes', serialNote);

      return resultArr;
      break;

    case DELETE_NOTE:
      localStorage.clear();
      const resultArr2 = notesState.filter(note => note.id !== payload.id);
      let serialNote2 = JSON.stringify(resultArr2);
      localStorage.setItem('notes', serialNote2);
      return resultArr2;
      break;

    default: 
      return notesState;
      break;
  }
}
