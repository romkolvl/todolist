import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class NoteForm extends Component {

  render() {

    const { handleSubmit, types, fetching } = this.props;
    console.log(this.props);

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="typeId">Select type...</label>
          {
            this.props.fetching ?
            <span>Loading types</span>
            :<Field name="typeId" component="select">
              {
                types && types.length && types.map(type =>
                  <option key={type.id} value={type.id}>
                    {type.title}
                  </option>
                )
              }
            </Field>
          }
        </div>
        <div>
          <label htmlFor="title">Write note title...</label>
          <Field name="title" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="text">Write note text...</label>
          <Field name="text" component="textarea" />
        </div>
        <button type="submit" >Submit</button>
      </form>
    );
  }
}

/*export default connect(
  state => ({
    initialValues: {}
  })
)(
  reduxForm({
    form: 'addNotes'
  })(NoteForm)
);*/

export default reduxForm({
  initialValues: {},
  form: 'addNotes'
})(NoteForm)
