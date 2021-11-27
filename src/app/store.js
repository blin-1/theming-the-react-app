import { configureStore } from '@reduxjs/toolkit'
import {createLogger} from 'redux-logger'
import counterReducer from '../features/counter/Counter.slice'
import loginReducer from '../features/loginPanel/login.slice'

const logger = createLogger({
  // ...options
});

export default configureStore({
  reducer: {
    counter: counterReducer,
    login:   loginReducer
  },
  middleware : [logger]
});
