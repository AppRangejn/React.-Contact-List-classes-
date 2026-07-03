import React from 'react'
import './ContactList.css'
import ContactItem from '../ContactItem/ContactItem'

function ContactList({ contacts, onSelectContact, onDeleteContact }) {
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

export default ContactList