import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './ContactList.css'
import ContactItem from '../ContactItem/ContactItem'
import { getContacts, resetContact } from '../../store/slices/contactSlice'

function ContactList() {
    const dispatch = useDispatch()
    const contacts = useSelector((state) => state.contactList.contacts)

    useEffect(() => {
        dispatch(getContacts())
    }, [dispatch])

    const onAddContact = () => {
        dispatch(resetContact())
    }

    return (
      <div className="contact-list">
        {contacts.map(contact => (
          <ContactItem
            key={contact.id}
            contact={contact}
          />
        ))}
        <button type="button" className="action-btn" onClick={onAddContact}>New</button>
      </div>
    )
}

export default ContactList