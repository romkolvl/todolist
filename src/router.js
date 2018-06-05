import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './App';
import NotesPage from './Note/NotesPage';
import AddNotePage from './NoteForm/AddNotePage';

export default (
  <Route component={App} path='/' >
    <IndexRoute component={NotesPage} />
    <Route component={AddNotePage} path='add-note' />
  </Route>
);
