import React, { Component } from 'react';
import './App.css';
import NoteList from './Note/NoteList'
import FormContainer from './NoteContainer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar, NavItem, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { LinkContainer } from 'react-router-bootstrap';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {

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
                <FormContainer />
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
