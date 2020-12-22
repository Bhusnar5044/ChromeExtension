import { combineReducers } from 'redux'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from './sagas'
import thunk from 'redux-thunk'
// import { persistStore, persistReducer } from 'redux-persist' // imports from redux-persist
// import storage from 'redux-persist/lib/storage'
// import {composeWithDevTools} from 'redux-devtools-extension'
import { TabReducer } from './Reducers/TabInfoReducer'

/* REDUCERS
–––––––––––––––––––––––––––––––––––––––––––––––––– */
const rootReducer = combineReducers({
    tabReducer: TabReducer
  })

/* SAGAS middleware
–––––––––––––––––––––––––––––––––––––––––––––––––– */
const sagaMiddleware = createSagaMiddleware()

/* STORE
–––––––––––––––––––––––––––––––––––––––––––––––––– */
const composeEnhancers = compose
const enhancers = applyMiddleware(thunk, sagaMiddleware)

export type AppState = ReturnType<typeof rootReducer>;

/** PERSISTED STATE
--------------------------------------------------------------- */

export const store = createStore(
  rootReducer,
  composeEnhancers(enhancers)
)

sagaMiddleware.run(rootSaga)
