import { createSlice } from '@reduxjs/toolkit';
import axios  from 'axios';

export const slice = createSlice({

  name: 'grid',

  initialState: {
      users: [],
      foobar: "FOO"
  },

/*   const initSelect = (data) => {
    return data.map((item) => ({...item}));
  } */

  reducers: {

    setUsers: (state, action) => {

      state.users = action.payload.response.data.map ((item) => ({...item}) )

    } 
    
  },
});

export const { setUsers } = slice.actions;

export const getUsers = () => dispatch => {
      axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          dispatch(setUsers({response}))
        })
        .catch((response) => {return Promise.reject(response);});
}

export const selectUsers   = state => state.grid.users
export const selectFoo     = state => state.grid.foobar

export default slice.reducer;
