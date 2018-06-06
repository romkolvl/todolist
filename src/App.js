import React, { Component } from 'react';
import './App.css';
import NoteList from './Note/NoteList'
import NoteForm from './NoteForm/NoteForm'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar, NavItem, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { LinkContainer } from 'react-router-bootstrap';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  /*constructor(props) {
    super(props);
    this.state = {
      notes: [
        { id: 1, title: "title 1", text: "Note 1 test" },
        { id: 2, title: "title 2", text: "Note 2 test" }
      ],
    }
  }*/

  /*addNote = (noteTitle, noteText) => {
    const prevNotes = [...this.state.notes];

    prevNotes.push({
      id: prevNotes[prevNotes.length - 1].id + 1,
      title: noteTitle,
      text: noteText
    });

    this.setState({
      notes: prevNotes,
    });
  }

  removeNote = (id) => {
    const notes = this.state.notes.filter(note => note.id != id)

    this.setState({
      notes: notes,
    });
  }*/

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Links />
            <Switch>
              <Route exact path='/'>
                <NoteList />
              </Route>
              <Route path='/add-note'>
                <NoteForm />
              </Route>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

const Links = () => (
  <Navbar bsStyle="default" bsClass="expand">
    <Navbar.Header>
      <Navbar.Brand>
        TO-DO LIST
      </Navbar.Brand>
      <Nav bsClass="navbar" bsStyle="pills" >
        <LinkContainer to='/' >
          <NavItem className="nav-link">Notes</NavItem>
        </LinkContainer>
        <LinkContainer to='/add-note' >
          <NavItem className="nav-link">Add note</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Header>
  </Navbar>
);