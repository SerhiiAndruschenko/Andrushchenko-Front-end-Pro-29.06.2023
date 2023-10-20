import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrlUsers = 'https://652ea1f10b8d8ddac0b1b487.mockapi.io/api/v1/users';

export const fetchUsers = createAsyncThunk('users/fetchUsers', () =>
  axios.get(apiUrlUsers).then((response) => response.data)
);

const initialState = {
  users: [],
};

const UsersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        console.log(action.payload);
        state.users = action.payload;
      });
  },
});


export const usersActions = UsersSlice.actions;
export default UsersSlice.reducer;