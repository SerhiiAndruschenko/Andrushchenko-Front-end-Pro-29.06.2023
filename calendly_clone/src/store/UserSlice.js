import { createSlice } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_NAME } from '../common/constants';

export const initialState = {
  user: {},
  token: null
}

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state, action) => {
      let encodedToken = btoa(JSON.stringify(action.payload));
      state.token = encodedToken;
      localStorage.setItem(LOCAL_STORAGE_NAME.TOKEN, encodedToken);
    }, 
    logOut: (state, action) => {
      state.token = null;
      state.user = {};
      localStorage.removeItem(LOCAL_STORAGE_NAME.TOKEN);
    },
    getToken:(state, action) => {
      state.token = localStorage.getItem(LOCAL_STORAGE_NAME.TOKEN);
    },
    getUser: (state, action) => {
      let decodedToken = atob(localStorage.getItem(LOCAL_STORAGE_NAME.TOKEN));
      state.user = JSON.parse(decodedToken);
    }
  }
});

export const UserActions = UserSlice.actions;
export default UserSlice.reducer;