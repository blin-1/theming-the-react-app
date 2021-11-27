import { createSlice } from '@reduxjs/toolkit';
import axios  from 'axios';

export const slice = createSlice({

  name: 'login',

  initialState: {
      username: '',
      password: '',
      authorized : false
  },

  reducers: {

    setUsername: (state, action) => {

      const value = action.payload
      state.username = value

    },

    setPassword: (state, action) => {
      
      const value = action.payload
      state.password = value 
    
    },

    logon: (state, action) => {

      state.username = action.payload.username
      state.password = action.payload.password
      state.authorized = true

    },

    logoff: state => state.authorized = false
    
  },
});

export const { setUsername,setPassword,logon,logoff } = slice.actions;


export const authorize = (username,password) => dispatch => {
      axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          dispatch(logon({username,password}))
          console.log(response.data)
        })
        .catch((response) => {return Promise.reject(response);});
}

export const selectUsername   = state => state.login.username
export const selectPassword   = state => state.login.password
export const selectAuthorized = state => state.login.authorized

export default slice.reducer;
