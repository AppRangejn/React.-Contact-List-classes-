import { useDispatch } from 'react-redux'
import './ContactItem.css'
import { deleteContactAction, selectContactAction } from '../../store/actions/contactActions'

function ContactItem({ contact}) {
  const dispatch = useDispatch()

  const onItemDelete = () => {
    dispatch(deleteContactAction(contact.id))
  }

  const onContactEdit = () => {
    dispatch(selectContactAction(contact))
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