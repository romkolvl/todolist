import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Note from './Note';
import { Grid, Row, Col, ListGroup } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import { connect } from 'react-redux';

class NoteList extends Component {
  static propTypes = {
    notes: PropTypes.array.isRequired,
  }

  render() {
    const {notes} = this.props;

    return (
      <Grid>
        <Row className="show-grid">
          <Col lg={12} md={12} sm={12} >
            <div className="note-list">
              <ListGroup>
                {
                  notes && notes.length && notes.map(note => 
                    <Note
                      key={note.id}
                      {...note} />
                  )
                }
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default connect(state => {
  return {
    notes: state.notes
  }
})(NoteList);
