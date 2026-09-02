import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../api/contact-service'
import { contactsState } from '../../model/initialContacts'
import { CONTACTS_SLICE_NAME } from '../../constants/constants'

const initialState = {
    selectedContact: null,
    contacts: contactsState,
    isFetching: false,
    error: null,
}

export const getContacts = createAsyncThunk(
    `${CONTACTS_SLICE_NAME}/getContacts`,
    async function(_, { rejectWithValue }) {
        try{
            const response = await api.get(`${CONTACTS_SLICE_NAME}`)
            if(response.status >= 400) {
                throw new Error('Error status is ${response.status}')
            }
            const { data } = response
            return data

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const delContact = createAsyncThunk(
    `${CONTACTS_SLICE_NAME}/delContact`,
    async (id, { rejectWithValue, dispatch }) => {
        try{
            const response = await api.delete(`${CONTACTS_SLICE_NAME}/${id}`)
            if(response.status >= 400) {
                throw new Error('Cant delete contact.Error status is ${response.status}')
            }
            dispatch(removeContact(id))

        } catch (error) {
            rejectWithValue(error.message)

        }
    }
)

export const updateContact = createAsyncThunk(
    `${CONTACTS_SLICE_NAME}/updateContact`,
    async (contact, { rejectWithValue, dispatch }) => {
        try{
            const response = await api.put(`${CONTACTS_SLICE_NAME}/${contact.id}`, contact)
            if(response.status >= 400) {
                throw new Error('Cant update contact.Error status is ${response.status}')
            }
            const { data } = response
            dispatch(changeContact(data))


        } catch (error) {
            rejectWithValue(error.message)

        }
    }
)

export const addContact = createAsyncThunk(
    `${CONTACTS_SLICE_NAME}/addContact`,
    async (contact, { rejectWithValue }) => {
        try{
            const response = await api.post(`${CONTACTS_SLICE_NAME}`, contact)
            if(response.status >= 400) {
                throw new Error('Cant add contact.Error status is ${response.status}')
            }
            const { data } = response
            return data
        } catch (error) {
            rejectWithValue(error.message)
        }
    }
)

const contactSlice = createSlice({
    name: CONTACTS_SLICE_NAME,
    initialState,
    reducers: {
        createContact: (state, { payload }) => {
            state.contacts.push(payload)

        },
        removeContact: (state, { payload }) => {
            state.contacts = [...state.contacts.filter(contact => contact.id !== payload)]
        },
        changeContact: (state, { payload }) => {
            state.contacts = state.contacts.map(contact => {
                return contact.id === payload.id ? payload : contact
            }) 
        },
        resetContact: (state) => {
            state.selectedContact = null
        },
        selectContact: (state, { payload }) => {
            state.selectedContact = payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getContacts.fulfilled, (state, { payload }) => {
            state.isFetching = false
            state.contacts = payload
            state.error = null
        })
        builder.addCase(getContacts.pending, setFetching)
        builder.addCase(getContacts.rejected, setError)

        builder.addCase(addContact.pending, setFetching)
        builder.addCase(addContact.rejected, setError)
        builder.addCase(addContact.fulfilled, (state, { payload }) => {
            state.isFetching = false
            state.error = null
            state.contacts.push(payload)
        })
        builder.addCase(delContact.pending, setFetching)
        builder.addCase(delContact.rejected, setError)
        builder.addCase(updateContact.pending, setFetching)
        builder.addCase(updateContact.rejected, setError)
    }
})

const setError = (state, action) => {
    state.isFetching = false
    state.error = action.payload
}

const setFetching = (state) => {
    state.isFetching = false
    state.error = null
}

const { actions, reducer } = contactSlice

export const { createContact, removeContact, changeContact, resetContact, selectContact } = actions

export default reducer