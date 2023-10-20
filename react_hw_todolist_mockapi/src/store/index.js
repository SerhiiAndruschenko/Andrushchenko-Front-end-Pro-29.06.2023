import { configureStore, combineReducers } from '@reduxjs/toolkit';
import tasks from './tasksSlice';
import users from './usersSlice';


const store = configureStore({
  reducer: combineReducers({
		tasks,
		users
	})
});

export default store;