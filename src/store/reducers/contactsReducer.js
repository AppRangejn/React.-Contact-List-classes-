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
  isFetching: false,
  error: null,
  contactForEdit: createEmptyContact(),
}

export default function contactsReducer(state = initialState, { type, payload }) {
  switch (type) {
    // SUCCESS
    // getting
    case ACTION_TYPES.GET_CONTACT_SUCCESS:
      return { ...state, contacts: payload, isFetching: false }
    // creating
    case ACTION_TYPES.POST_CONTACT_SUCCESS:
      return { ...state, contacts: [...state.contacts, payload],
        isFetching: false,
       }
    // updating
    case ACTION_TYPES.UPDATE_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: state.contacts.map((item) =>
          item.id === payload.id ? payload : item
        ), 
        isFetching: false,
      }
    // deleting
    case ACTION_TYPES.DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: state.contacts.filter((item) => item.id !== payload),
        isFetching: false,
        contactForEdit:
          state.contactForEdit.id === payload
            ? createEmptyContact()
            : state.contactForEdit,
      }
    // selecting
    case ACTION_TYPES.SELECT_CONTACT_ACTION:
    case ACTION_TYPES.SELECT_CONTACT_SUCCESS:
      return { ...state, contactForEdit: payload, isFetching: false }
    // resetting
    case ACTION_TYPES.RESET_CONTACT_ACTION:
    case ACTION_TYPES.RESET_CONTACT_SUCCESS:
      return { ...state, contactForEdit: createEmptyContact(), isFetching: false }


    //REQUEST
    case ACTION_TYPES.POST_CONTACT_REQUEST:
    case ACTION_TYPES.DELETE_CONTACT_REQUEST:
    case ACTION_TYPES.UPDATE_CONTACT_REQUEST:
    case ACTION_TYPES.GET_CONTACT_REQUEST:
      return {...state, isFetching: true}
    
    //ERROR
    case ACTION_TYPES.POST_CONTACT_ERROR:
    case ACTION_TYPES.DELETE_CONTACT_ERROR:
    case ACTION_TYPES.UPDATE_CONTACT_ERROR:
    case ACTION_TYPES.GET_CONTACT_ERROR:
      return {...state, isFetching: false, error: payload}


    default:
      return state
  }
}