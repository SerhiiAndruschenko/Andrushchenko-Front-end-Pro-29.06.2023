import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../../store/tasksSlice';
import { Input, Button} from 'antd';

function Form() {
  const dispatch = useDispatch();
  const [taskInputText, setTaskInputText] = useState('');
  const tasks = useSelector((state) => state.tasks.tasks);

  const handleAddTask = (event) => {
    event.preventDefault();
    console.log(tasks.length);
    const maxTaskId = tasks.length + 1;
    const newTaskId = maxTaskId.toString();
    const newTask = { text: taskInputText, completed: false, id: newTaskId, assignedUser: {} };
    if (newTask.text !== '') {
      dispatch(addTask(newTask));
      setTaskInputText('');
    }
  };

  return (
    <div className='form'>
      <form onSubmit={handleAddTask}>
        <Input
          placeholder="Your task"
          size="large"
          value={taskInputText}
          onChange={(e) => setTaskInputText(e.target.value)}
        />
        <Button 
          type="primary"
          htmlType="submit"
          size="large"
        >
          Add task
        </Button>
        </form>
    </div>
  );
}

export default Form;
