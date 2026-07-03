import React from 'react'
import './ContactItem.css'

function ContactItem({firstName, lastName, onDoubleClick, onDelete}) {
  return (
    <div className="contact-item" onDoubleClick={onDoubleClick}>
        <span className="contact-name">{firstName} {lastName}</span>
        <button className="clear-btn" onClick={onDelete}>X</button>
    </div>
  )
}

export default ContactItem