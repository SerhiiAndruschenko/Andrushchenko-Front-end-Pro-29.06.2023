import React, {useEffect, useState} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector, useDispatch } from 'react-redux';
import { tasksActions } from '../../store/tasksSlice';

function TaskList() {
  const [sortedTasks, setSortedTasks] = useState([]);
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  
  useEffect(() =>{
    const sortedTasks = [...tasks].sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1));
    setSortedTasks(sortedTasks);
  }, [tasks]);

  return (
    <div>
      {sortedTasks.length !== 0 && (
        <List style={{ width: '100%', bgcolor: 'background.paper', padding: 0 }}>
          {sortedTasks.map((task, index) => (
            <ListItem 
              key={index} 
              style ={{ background: task.completed ? '#dff1de' : '#fff' }}
              secondaryAction={
                <IconButton
                  onClick={() => dispatch(tasksActions.deleteTask(task.id))}
                  >
                  <DeleteIcon />
                </IconButton>
              }
            >
              <Checkbox  onClick={() => dispatch(tasksActions.toggleTask(task.id))} checked={task.completed} />
              <ListItemText
                primary={task.text}
                style={{ textDecoration: task.completed ? 'line-through' : 'none'}}
              />
            </ListItem>
          ))}
        </List>
      )}
    </div>
  )
}

export default TaskList;