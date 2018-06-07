import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import { connect } from 'react-redux';
import { addNote, changeInputValue, clearForm, loadTypes } from '../ActionCreators';
import { v4 } from 'uuid';
//import axios from 'axios';

class NoteForm extends Component {

  componentDidMount() {
    this.loadTypes();
  }

  addNote = () => {
    this.props.addNote({
      id: v4(),
      typeId: this.props.typeInput,
      title: this.props.titleInput,
      text: this.props.descriptionInput,
    });

    this.clearForm();
  }

  changeInputValue = (e) => {
    this.props.changeInputValue(
      e.target.name,
      e.target.value,
    );
  }

  clearForm = () => {
    this.props.clearForm();
  }

  loadTypes = () => {
    this.props.loadTypes();
  }

  render() {
    return (
      <div className="note-form">
        <Grid>
          <Row className="show-grid">
            <Col lg={12} md={12} sm={12} >
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>Type</ControlLabel>
                {
                  this.props.fetching ?
                  <p>Loading types</p>
                  : <FormControl
                    componentClass="select"
                    placeholder="Note type"
                    onChange={this.changeInputValue}
                    name="typeInput">
                    {
                      this.props.types && this.props.types.length && this.props.types.map(type =>
                        <option key={type.id} value={type.id}>
                          {type.title}
                        </option>
                      )
                    }
                  </FormControl>
                }
                
              </FormGroup>
              <FormGroup controlId="formControlsTextarea">
                <ControlLabel>Write note title ...</ControlLabel>
                <FormControl
                  type="text"
                  value={this.props.titleInput}
                  onChange={this.changeInputValue}
                  name="titleInput"
                />
              </FormGroup>
              <FormGroup controlId="formControlsTextarea">
                <ControlLabel>Write note text ...</ControlLabel>
                <FormControl
                  componentClass="textarea"
                  value={this.props.descriptionInput}
                  onChange={this.changeInputValue}
                  name="descriptionInput"
                />
              </FormGroup>
              <Button type="submit" className="add-button" onClick={this.addNote} >Add note</Button>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    typeInput: state.formAddNote.typeInput,
    titleInput: state.formAddNote.titleInput,
    descriptionInput: state.formAddNote.descriptionInput,
    types: state.types.types,
    fetching: state.types.fetching
  }
}

export default connect(mapStateToProps, (dispatch, ownProps) => ({
  addNote: (note) => dispatch(addNote(note)),
  changeInputValue: (inputName, inputValue) => dispatch(changeInputValue(inputName, inputValue)),
  clearForm: () => dispatch(clearForm()),
  loadTypes: () => dispatch(loadTypes())
}))(NoteForm);