import { configureStore } from '@reduxjs/toolkit'
import {createLogger} from 'redux-logger'
import ReduxThunk from 'redux-thunk'

import counterReducer from 'app/tabs/redux/counter/counter.slice'
import loginReducer   from 'app/tabs/login/login.slice'
import gridReducer    from 'app/tabs/grid/grid.slice'

const logger = createLogger({
  // ...options
});

export default configureStore({
  reducer: {
    counter: counterReducer,
    login:   loginReducer,
    grid:    gridReducer
  },
  middleware : [ReduxThunk,logger]
});
