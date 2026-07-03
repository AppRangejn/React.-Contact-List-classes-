import React from 'react'
import { useState } from 'react'
import './ContactForm.css'

function ContactForm({
    firstName, setFirstName,
    lastName, setLastName,
    email, setEmail,
    phone, setPhone
}) {

  return (
    <div className="contact-form">
        <div className="input-form">
            <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <button className="clear-input-btn" onClick={() => setFirstName('')}>X</button>
        </div>
        <div className="input-form">
            <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <button className="clear-input-btn" onClick={() => setLastName('')}>X</button>
        </div>
        <div className="input-form">
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button className="clear-input-btn" onClick={() => setEmail('')}>X</button>
        </div>
        <div className="input-form">
            <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <button className="clear-input-btn" onClick={() => setPhone('')}>X</button>
        </div>
    </div>
  )
}

export default ContactForm
