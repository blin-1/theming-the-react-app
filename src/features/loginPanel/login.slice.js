import { createSlice } from '@reduxjs/toolkit';

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

export const logonAsync = (username,password) => dispatch => {
  setTimeout(() => {
    dispatch(logon(username,password));
  }, 2000);
};

export const selectUsername = state => state.login.username
export const selectPassword = state => state.login.password

export default slice.reducer;
