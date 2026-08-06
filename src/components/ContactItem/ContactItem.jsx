import { useDispatch } from 'react-redux'
import './ContactItem.css'
import api from '../../api/contact-service'
import { deleteContactAction, selectContactAction } from '../../store/actions/contactActions'

function ContactItem({ contact}) {
  const dispatch = useDispatch()

  const onItemDelete = () => {
    api.delete(`/contacts/${contact.id}`).then(() => dispatch(deleteContactAction(contact.id)))
    .catch((error) => {
      console.log(error)
    })
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