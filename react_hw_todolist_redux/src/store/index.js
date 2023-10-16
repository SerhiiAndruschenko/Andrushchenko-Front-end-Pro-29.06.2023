import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import tasks from './tasksSlice';


const store = configureStore({
  reducer: combineReducers({
		tasks
	})
});

export default store;