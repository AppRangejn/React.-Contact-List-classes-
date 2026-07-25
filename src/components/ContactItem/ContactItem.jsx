import './ContactItem.css'

function ContactItem({ contact, onDelete, onEdit }) {
  const onItemDelete = (e) => {
    e.stopPropagation() 
    onDelete(contact.id)
  }

  const onContactEdit = (e) => {
    e.stopPropagation()
    onEdit(contact)
  }

  return (
    <div className="contact-item" onDoubleClick={onContactEdit}>
      <span className="contact-name">
        {contact.firstName} {contact.lastName}
      </span>
      <button className="clear-btn" onClick={onItemDelete}>X</button>
    </div>
  )
}

export default ContactItem