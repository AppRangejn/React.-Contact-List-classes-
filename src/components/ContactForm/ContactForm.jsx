import { Component } from 'react'
import './ContactForm.css'

export class ContactForm extends Component {
  state = {
    ...this.props.contactForEdit,
  }

  static getDerivedStateFromProps(props, state) {
    if (state.id === props.contactForEdit.id) {
      return null
    }
    return {
      ...props.contactForEdit,
    }
  }

  setFirstName = (value) => {
    this.setState({ firstName: value })
  }

  setLastName = (value) => {
    this.setState({ lastName: value })
  }

  setEmail = (value) => {
    this.setState({ email: value })
  }

  setPhone = (value) => {
    this.setState({ phone: value })
  }

  handleSubmit = () => {
    const { id, firstName, lastName, email, phone } = this.state

    if (!firstName || !lastName || !email || !phone) {
      return
    }

    this.props.onSubmit({ id, firstName, lastName, email, phone })
  }

  handleDelete = () => {
    if (this.state.id) {
      this.props.onDelete(this.state.id)
    }
  }

  render() {
    const { id, firstName, lastName, email, phone } = this.state

    return (
      <div className="contact-form">
        <div className="input-form">
          <input type="text" placeholder="First Name" value={firstName} onChange={(e) => this.setFirstName(e.target.value)} />
          <button className="clear-input-btn" onClick={() => this.setFirstName('')}>X</button>
        </div>
        <div className="input-form">
          <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => this.setLastName(e.target.value)} />
          <button className="clear-input-btn" onClick={() => this.setLastName('')}>X</button>
        </div>
        <div className="input-form">
          <input type="email" placeholder="Email" value={email} onChange={(e) => this.setEmail(e.target.value)} />
          <button className="clear-input-btn" onClick={() => this.setEmail('')}>X</button>
        </div>
        <div className="input-form">
          <input type="text" placeholder="Phone" value={phone} onChange={(e) => this.setPhone(e.target.value)} />
          <button className="clear-input-btn" onClick={() => this.setPhone('')}>X</button>
        </div>
        <div className="button-panel">
          <button className="action-btn" onClick={this.handleSubmit}>Save</button>
          {id && (
            <button className="action-btn" onClick={this.handleDelete}>Delete</button>
          )}
        </div>
      </div>
    )
  }
}

export default ContactForm