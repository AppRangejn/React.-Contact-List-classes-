import { useDispatch } from 'react-redux'
import './ContactItem.css'
import { delContact, selectContact } from '../../store/slices/contactSlice'

function ContactItem({ contact}) {
  const dispatch = useDispatch()

  const onItemDelete = () => {
    dispatch(delContact(contact.id))
    .catch((error) => {
      console.log(error)
    })
  }

  const onContactEdit = () => {
    dispatch(selectContact(contact))
  }

  return (
    <div className="contact-item" onDoubleClick={onContactEdit}>
      <span className="contact-name">
        {contact.firstName} {contact.lastName}
      </span>
      <button type="button" className="clear-btn" onClick={onItemDelete}>X</button>
    </div>
  )
}

export default ContactItem