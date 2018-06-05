import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import "./Note.css";
import { connect } from 'react-redux';
import { deleteNote } from '../ActionCreators';
import axios from 'axios';

class Note extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    typeId: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      types: [],
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

  render() {
    const type = { ...this.state.types[this.props.typeId-1] };
    const title = `${this.props.title} (${type.title})`;
    return (
      <ListGroupItem key={this.props.id} header={title} bsClass="list-group-item note-item">
        {this.props.text}
        <button className="del-button close" onClick={this.handleDelete} >X</button>
      </ListGroupItem>
    );
  }

  handleDelete = () => {
    const { deleteNote, id } = this.props;
    deleteNote(id);
  }
}
export default connect(null, { deleteNote })(Note);