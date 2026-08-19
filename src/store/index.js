import { configureStore } from '@reduxjs/toolkit'
import contactReducer from './slices/contactSlice'
import { createLogger } from 'redux-logger'

const logger = createLogger()

export default configureStore({
    reducer: {
        contactList: contactReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

