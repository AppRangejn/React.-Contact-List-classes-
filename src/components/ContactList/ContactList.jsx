import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './ContactList.css'
import ContactItem from '../ContactItem/ContactItem'
import api from '../../api/contact-service'
import { getContactsAction, resetContactAction } from '../../store/actions/contactActions'

function ContactList() {
    const dispatch = useDispatch()
    const contacts = useSelector((state) => state.contactsList.contacts)

    useEffect(() => {
        api.get('/contacts').then(({data}) => dispatch(getContactsAction(data)))
        .catch((error) => {
            console.log(error)
        })
    }, [dispatch])

    const onAddContact = () => {
        dispatch(resetContactAction())
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