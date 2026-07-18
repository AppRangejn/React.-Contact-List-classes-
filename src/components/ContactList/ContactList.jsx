import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ContactList.css'
import ContactItem from '../ContactItem/ContactItem'

export class ContactList extends Component {
  render() {
    const { contacts, onSelectContact, onDeleteContact } = this.props;
    return (
      <div className="contact-list">
        {contacts.map(contact => (
          <ContactItem
            key={contact.id}
            firstName={contact.firstName}
            lastName={contact.lastName}
            onDoubleClick={() => onSelectContact(contact)}
            onDelete={() => onDeleteContact(contact.id)}
          />
        ))}
      </div>
    )
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  onSelectContact: PropTypes.func,
  onDeleteContact: PropTypes.func
}

ContactList.defaultProps = {
  contacts: []
}


export default ContactList