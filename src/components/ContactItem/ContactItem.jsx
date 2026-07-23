import { Component } from 'react'
import './ContactItem.css'


export class ContactItem extends Component {
  onItemDelete = (e) => {
    e.stopPropagation()
    this.props.onDelete(this.props.contact.id)
  }

  onContactEdit = (e) => {
    e.stopPropagation()
    this.props.onEdit(this.props.contact)
  }

  render() {
    const { contact } = this.props
    return (
      <div className="contact-item" onDoubleClick={this.onContactEdit}>
        <span className="contact-name">{contact.firstName} {contact.lastName}</span>
        <button className="clear-btn" onClick={this.onItemDelete}>X</button>
      </div>
    )
  }
}


export default ContactItem