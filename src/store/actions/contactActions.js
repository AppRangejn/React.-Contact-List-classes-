import { ACTION_TYPES } from './actionTypes'
// getting
export const getContactsAction = () => {
    return {
        type: ACTION_TYPES.GET_CONTACT_ACTION,
    }
}

export const getContactsRequest = () => {
    return {
        type: ACTION_TYPES.GET_CONTACT_REQUEST,
    }
}

export const getContactsSuccess = (contact) => {
    return {
        type: ACTION_TYPES.GET_CONTACT_SUCCESS,
        payload: contact,
    }
}

export const getContactsError = (error) => {
    return {
        type: ACTION_TYPES.GET_CONTACT_ERROR,
        payload: error,
    }
}

// creating
export const addContactAction = (contact) => {
  return {
    type: ACTION_TYPES.POST_CONTACT_ACTION,
    payload: contact,
  }
}

export const addContactRequest = () => {
  return {
    type: ACTION_TYPES.POST_CONTACT_REQUEST,
  }
}

export const addContactSuccess = (contact) => {
  return {
    type: ACTION_TYPES.POST_CONTACT_SUCCESS,
    payload: contact,
  }
}

export const addContactError = (error) => {
  return {
    type: ACTION_TYPES.POST_CONTACT_ERROR,
    payload: error,
  }
}
// updating
export const updateContactAction = (contact) => {
  return {
    type: ACTION_TYPES.UPDATE_CONTACT_ACTION,
    payload: contact,
  }
}

export const updateContactRequest = () => {
  return {
    type: ACTION_TYPES.UPDATE_CONTACT_REQUEST,
  }
}

export const updateContactSuccess = (contact) => {
  return {
    type: ACTION_TYPES.UPDATE_CONTACT_SUCCESS,
    payload: contact,
  }
}

export const updateContactError = (error) => {
  return {
    type: ACTION_TYPES.UPDATE_CONTACT_ERROR,
    payload: error,
  }
}

// deleting
export const deleteContactAction = (id) => {
  return {
    type: ACTION_TYPES.DELETE_CONTACT_ACTION,
    payload: id,
  }
}

export const deleteContactRequest = () => {
  return {
    type: ACTION_TYPES.DELETE_CONTACT_REQUEST,
  }
}

export const deleteContactSuccess = (id) => {
  return {
    type: ACTION_TYPES.DELETE_CONTACT_SUCCESS,
    payload: id,
  }
}

export const deleteContactError = (error) => {
  return {
    type: ACTION_TYPES.DELETE_CONTACT_ERROR,
    payload: error,
  }
}

// selecting
export const selectContactAction = (contact) => {
  return {
    type: ACTION_TYPES.SELECT_CONTACT_ACTION,
    payload: contact,
  }
}

export const selectContactRequest = () => {
  return {
    type: ACTION_TYPES.SELECT_CONTACT_REQUEST,
  }
}

export const selectContactSuccess = (contact) => {
  return {
    type: ACTION_TYPES.SELECT_CONTACT_SUCCESS,
    payload: contact,
  }
}

export const selectContactError = (error) => {
  return {
    type: ACTION_TYPES.SELECT_CONTACT_ERROR,
    payload: error,
  }
}

// resetting
export const resetContactAction = (contact) => {
  return {
    type: ACTION_TYPES.RESET_CONTACT_ACTION,
    payload: contact,
  }
}

export const resetContactRequest = () => {
  return {
    type: ACTION_TYPES.RESET_CONTACT_REQUEST,
  }
}

export const resetContactSuccess = (contact) => {
  return {
    type: ACTION_TYPES.RESET_CONTACT_SUCCESS,
    payload: contact,
  }
}

export const resetContactError = (error) => {
  return {
    type: ACTION_TYPES.RESET_CONTACT_ERROR,
    payload: error,
  }
}