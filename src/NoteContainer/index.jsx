import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import { connect } from 'react-redux';
import { addNote, loadTypes } from '../ActionCreators';
import { v4 } from 'uuid';
import NoteForm from './NoteForm'
import { getFormValues, formValueSelector } from 'redux-form';
import { reset } from 'redux-form';

class FormContainer extends Component {
  componentDidMount() {
    this.loadTypes();
  }

  addNote = () => {
    this.props.addNote({
      id: v4(),
      typeId: this.props.typeId,
      title: this.props.title,
      text: this.props.text,
    });
    this.props.reset();
  }

  loadTypes = () => {
    this.props.loadTypes();
  }

  render() {
    // const {title, text} = this.props.values || {};
    console.log(this.props.title)

    return (
      <div className="note-form">
        <NoteForm onSubmit={this.addNote} types={this.props.types} fetching={this.props.fetching} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    types: state.types.types,
    fetching: state.types.fetching,
    title: formValueSelector("addNotes")(state, 'title'),
    text: formValueSelector("addNotes")(state, 'text'),
    typeId: formValueSelector("addNotes")(state, 'typeId')
  }
};

const mapDispatchToProps = dispatch => ({
    addNote: (note) => dispatch(addNote(note)),
    loadTypes: () => dispatch(loadTypes()),
    reset: () => dispatch(reset('addNotes'))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormContainer);
