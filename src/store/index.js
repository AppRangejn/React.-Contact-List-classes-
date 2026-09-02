import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from '@redux-devtools/extension'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'
import rootReducer from './reducers'

const logger = createLogger()

const sagaMiddleware = createSagaMiddleware()

const middleware = applyMiddleware(sagaMiddleware, logger)

export default createStore(rootReducer, composeWithDevTools(middleware))

sagaMiddleware.run(rootSaga)