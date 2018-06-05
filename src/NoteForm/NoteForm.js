import React, { Component } from 'react';
//import PropType from 'prop-types';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import { connect } from 'react-redux';
import { addNote, changeInputValue } from '../ActionCreators';
import { v4 } from 'uuid';
import axios from 'axios';

class NoteForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      types: [],
      noteTitle: '',
      noteText: '',
      noteType: '1'
    };
  }

  componentDidMount() {
    axios.get('../types.json')
      .then(res => {
        const types = res.data;
        this.setState({
          types: [...types]
        });
      });
  }

  handleChangeDescription = (e) => {
    this.setState({
      noteText: e.target.value,
    });
  }

  handleChangeTitle = (e) => {
    this.setState({
      noteTitle: e.target.value,
    });
  }

  handleChangeType = (e) => {
    this.setState({
      noteType: e.target.value
    });
  }

  addNote = () => {
    this.props.addNote({
      id: v4(),
      title: this.state.noteTitle,
      text: this.state.noteText,
      typeId: this.state.noteType
    });

    this.setState({
      noteTitle: '',
      noteText: ''
    });
  }

  render() {
    return (
      <div className="note-form">
        <Grid>
          <Row className="show-grid">
            <Col lg={12} md={12} sm={12} >
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>Type</ControlLabel>
                <FormControl
                  componentClass="select"
                  placeholder="Note type"
                  onChange={this.handleChangeType}>
                  {
                    this.state.types && this.state.types.length && this.state.types.map(type =>
                      <option key={type.id} value={type.id}>
                        {type.title}
                      </option>
                    )
                  }
                </FormControl>
              </FormGroup>
              <FormGroup controlId="formControlsTextarea">
                <ControlLabel>Write note title ...</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.noteTitle}
                  onChange={this.handleChangeTitle}
                />
              </FormGroup>
              <FormGroup controlId="formControlsTextarea">
                <ControlLabel>Write note text ...</ControlLabel>
                <FormControl
                  componentClass="textarea"
                  value={this.state.noteText}
                  onChange={this.handleChangeDescription}
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

export default connect(null, (dispatch, ownProps) => ({
  addNote: (note) => dispatch(addNote(note))
}))(NoteForm);