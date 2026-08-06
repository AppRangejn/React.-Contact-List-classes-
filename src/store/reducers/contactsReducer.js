import { ACTION_TYPES } from '../actions/actionTypes'
import {contactsState} from '../../model/initialContacts'

export const createEmptyContact = () => ({
  id: null,
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
})

const initialState = {
  contacts: contactsState,
  contactForEdit: createEmptyContact(),
}

export default function contactsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ACTION_TYPES.GET_CONTACTS:
      return { ...state, contacts: payload }

    case ACTION_TYPES.ADD_CONTACT:
      return { ...state, contacts: [...state.contacts, payload] }

    case ACTION_TYPES.UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((item) =>
          item.id === payload.id ? payload : item
        ),
      }

    case ACTION_TYPES.DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((item) => item.id !== payload),
        contactForEdit:
          state.contactForEdit.id === payload
            ? createEmptyContact()
            : state.contactForEdit,
      }

    case ACTION_TYPES.SELECT_CONTACT:
      return { ...state, contactForEdit: payload }

    case ACTION_TYPES.RESET_CONTACT:
      return { ...state, contactForEdit: createEmptyContact() }

    default:
      return state
  }
}