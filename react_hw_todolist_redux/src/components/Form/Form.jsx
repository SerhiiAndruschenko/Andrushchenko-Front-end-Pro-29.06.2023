import React, { useRef } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { tasksActions } from '../../store/tasksSlice';

let taskId = 0;
function Form() {
  const dispatch = useDispatch();
  const taskInputRef = useRef(null);

  const handleAddTask = (event) => {
    event.preventDefault();
    const newTask = { id: taskId++, text: taskInputRef.current.value, completed: false };
    if (newTask !== '') {
      dispatch(tasksActions.addTask(newTask));
      taskInputRef.current.value = '';
    }
  };

  return (
    <div className='form'>
      <form onSubmit={handleAddTask}>
        <TextField
          label="Your task"
          variant="outlined"
          size="small"
          inputRef={taskInputRef}
        />
        <Button 
          type="submit"
          variant="contained" 
          color="primary" 
          size="small"
          disableElevation
        >
          Add task
        </Button>
        </form>
    </div>
  );
}

export default Form;
