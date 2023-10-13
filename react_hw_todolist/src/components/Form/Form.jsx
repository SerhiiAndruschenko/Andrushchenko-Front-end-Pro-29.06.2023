import React, { useRef, useContext } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { TaskListContext } from '../../App';

function Form() {
  const context = useContext(TaskListContext);
  const taskInputRef = useRef(null);

  const handleAddTask = (event) => {
    event.preventDefault();
    const newTask = taskInputRef.current.value;
    if (newTask.trim() !== '') {
      context.addTask(newTask);
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
