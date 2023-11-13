import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import user from './UserSlice';


const store = configureStore({
  reducer: combineReducers({
		user, 
	})
});

export default store;