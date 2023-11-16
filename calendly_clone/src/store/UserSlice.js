import { createSlice } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_NAME } from '../common/constants';

export const initialState = {
  users: [],
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
      const storedToken = localStorage.getItem(LOCAL_STORAGE_NAME.TOKEN);
      if(storedToken) {
        const decodedToken = atob(storedToken);
        state.user = JSON.parse(decodedToken);
      }
    },
    getUserList: (state, action) => {
      const storedUsers = localStorage.getItem(LOCAL_STORAGE_NAME.USERS);
      state.users = storedUsers ? JSON.parse(storedUsers) : [];
    },
    addUser: (state, action) => {
      const newUser = action.payload;
      state.users = [...state.users, newUser];
      localStorage.setItem(LOCAL_STORAGE_NAME.USERS, JSON.stringify(state.users));
    }
  }
});

export const UserActions = UserSlice.actions;
export default UserSlice.reducer;