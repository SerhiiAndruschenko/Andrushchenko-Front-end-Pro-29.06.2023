import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrlTasks = 'https://652ea1f10b8d8ddac0b1b487.mockapi.io/api/v1/tasks';

export const fetchInitialTasks = createAsyncThunk('tasks/fetchInitialTasks', () =>
  axios.get(apiUrlTasks).then((response) => response.data)
);

export const addTask = createAsyncThunk('tasks/addTask', (newTask) =>
  axios.post(apiUrlTasks, newTask ).then((response) => response.data)
);

export const deleteTask = createAsyncThunk('tasks/deleteTask', (taskId) =>
  axios.delete(`${apiUrlTasks}/${taskId}`).then(() => taskId)
);

export const toggleTask = createAsyncThunk('tasks/toggleTask', (taskId) =>
  axios.get(`${apiUrlTasks}/${taskId}`).then((response) => {
    if (response.data) {
      const task = response.data;
      const newCompletedValue = !task.completed;
      return axios.put(`${apiUrlTasks}/${taskId}`, { completed: newCompletedValue }).then(() => taskId);
    } else {
      throw new Error('Failed to fetch the task for toggling.');
    }
  })
);

export const editTask = createAsyncThunk('tasks/editTask', ({ id, text }) =>
  axios.put(`${apiUrlTasks}/${id}`, { text }, {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(() => ({ id, text }))
);

export const setUserForTask = createAsyncThunk('tasks/setUserForTask', ({ taskId, user }) =>
  axios.put(`${apiUrlTasks}/${taskId}`, { assignedUser: user }, {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(() => ({ taskId, user }))
);

const initialState = {
  tasks: [],
  isLoading: false
};

const TasksSlice = createSlice({
  name: 'tasks',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchInitialTasks.fulfilled, (state, action) => {
        state.tasks = action.payload.reverse();
      })
      .addCase(addTask.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tasks = [action.payload, ...state.tasks];
      })
      .addCase(deleteTask.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        state.isLoading = false;
      })
      .addCase(toggleTask.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(toggleTask.fulfilled, (state, action) => {
        state.isLoading = false;
        const taskId = action.payload;
        const taskToToggle = state.tasks.find((task) => task.id === taskId);
        if (taskToToggle) {
          taskToToggle.completed = !taskToToggle.completed;
        }
      })
      .addCase(editTask.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(editTask.fulfilled, (state, action) => {
        state.isLoading = false;
        const { id, text } = action.payload;
        const taskToEdit = state.tasks.find((task) => task.id === id);
        if (taskToEdit) {
          taskToEdit.text = text;
        }
      });
  },
});

export const tasksActions = TasksSlice.actions;
export default TasksSlice.reducer;
