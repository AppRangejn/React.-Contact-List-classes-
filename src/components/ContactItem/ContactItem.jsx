import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ContactItem.css'


export class ContactItem extends Component {
  render() {
    const { firstName, lastName, onDoubleClick, onDelete } = this.props;
    return (
      <div className="contact-item" onDoubleClick={onDoubleClick}>
        <span className="contact-name">{firstName} {lastName}</span>
        <button className="clear-btn" onClick={onDelete}>X</button>
      </div>
    )
  }
}

ContactItem.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  onDoubleClick: PropTypes.func,
  onDelete: PropTypes.func
}

export default ContactItem