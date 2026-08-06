import { ACTION_TYPES } from './actionTypes'

export const getContactsAction = (contacts) => {
    return {
        type: ACTION_TYPES.GET_CONTACTS,
        payload: contacts,
    }
}

export const addContactAction = (contact) => {
  return {
    type: ACTION_TYPES.ADD_CONTACT,
    payload: contact,
  }
}

export const updateContactAction = (contact) => {
  return {
    type: ACTION_TYPES.UPDATE_CONTACT,
    payload: contact,
  }
}

export const deleteContactAction = (id) => {
  return {
    type: ACTION_TYPES.DELETE_CONTACT,
    payload: id,
  }
}

export const selectContactAction = (contact) => {
  return {
    type: ACTION_TYPES.SELECT_CONTACT,
    payload: contact,
  }
}

export const resetContactAction = () => {
  return {
    type: ACTION_TYPES.RESET_CONTACT,
  }
}