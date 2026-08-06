import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from '@redux-devtools/extension'
import rootReducer from './reducers'

const logger = createLogger()

const middleware = applyMiddleware(logger)

export default createStore(rootReducer, composeWithDevTools(middleware))