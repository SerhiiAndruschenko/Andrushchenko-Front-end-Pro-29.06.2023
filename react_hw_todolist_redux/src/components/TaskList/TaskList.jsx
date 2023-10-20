import React, {useEffect, useState} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useSelector, useDispatch } from 'react-redux';
import { tasksActions } from '../../store/tasksSlice';
import { TextField } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import SaveIcon from '@mui/icons-material/Save';

function TaskList() {
  const [sortedTasks, setSortedTasks] = useState([]);
  const [editText, setEditText] = useState('');
  const [editMode, setEditMode] = useState(null);

  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  
  useEffect(() =>{
    const sortedTasks = [...tasks].sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1));
    setSortedTasks(sortedTasks);
  }, [tasks]);

  const handleEdit = (id, text) => {
    setEditMode(id);
    setEditText(text);
  };

  const saveEdit = (taskId, newText) => {
    dispatch(tasksActions.editTask({id: taskId, text: newText}));
    setEditMode(null);
  }



  return (
    <div>
      {sortedTasks.length !== 0 && (
        <List style={{ width: '100%', bgcolor: 'background.paper', padding: 0 }}>
          {sortedTasks.map((task, index) => (
            <ListItem 
              key={index} 
              style ={{ background: task.completed ? '#dff1de' : '#fff' }}
              secondaryAction={
                <>
                {editMode === task.id ? (
                  <div>
                    <IconButton
                      onClick={() => saveEdit(task.id, editText)}
                    >
                      <SaveIcon />
                  </IconButton>
                    <IconButton
                        onClick={() => handleEdit(null)}
                      >
                        <CancelIcon />
                    </IconButton>
                  </div>
                ) : (
                    <div>
                      <IconButton
                          onClick={() => handleEdit(task.id, task.text)}
                          disabled={task.completed}
                        >
                          <EditIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => dispatch(tasksActions.deleteTask(task.id))}
                        >
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  )}
                  </>
                
              }
            >

            {editMode === task.id ? (
                <>
                  <Checkbox  disabled />
                  <TextField
                    size="small"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                </>
              ) : (
                <>
                  <Checkbox  onClick={() => dispatch(tasksActions.toggleTask(task.id))} checked={task.completed} />
                  <ListItemText
                      primary={task.text}
                      style={{ textDecoration: task.completed ? 'line-through' : 'none'}}
                  />
                </>
              )}

              
            </ListItem>
          ))}
        </List>
      )}
    </div>
  )
}

export default TaskList;