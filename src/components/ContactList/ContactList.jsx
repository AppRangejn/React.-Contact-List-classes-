import './ContactList.css'
import ContactItem from '../ContactItem/ContactItem'

function ContactList({ contacts, onDelete, onAddContact, onEditContact }) {
    return (
      <div className="contact-list">
        {contacts.map(contact => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onDelete={onDelete}
            onEdit={onEditContact}
          />
        ))}
        <button className="action-btn" onClick={onAddContact}>New</button>
      </div>
    )
}

export default ContactList