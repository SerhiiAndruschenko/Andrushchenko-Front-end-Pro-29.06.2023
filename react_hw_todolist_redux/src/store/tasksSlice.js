import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  tasks: [],
}

const TasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks = [action.payload, ...state.tasks]
    }, 
    deleteTask: (state, action) => {
      const updatedTasks = [...state.tasks];
      const indexToDelete = updatedTasks.findIndex(task => task.id === action.payload);
      updatedTasks.splice(indexToDelete, 1);
      state.tasks = updatedTasks
    },
    toggleTask: (state, action) => {
      const updatedTasks = [...state.tasks];
      const indexToUpdate = updatedTasks.findIndex(task => task.id === action.payload);
      updatedTasks[indexToUpdate].completed = !updatedTasks[indexToUpdate].completed;
      state.tasks = updatedTasks;
    }
  }
});

export const tasksActions = TasksSlice.actions;
export default TasksSlice.reducer;