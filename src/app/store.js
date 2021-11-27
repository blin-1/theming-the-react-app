import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/Counter.slice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
