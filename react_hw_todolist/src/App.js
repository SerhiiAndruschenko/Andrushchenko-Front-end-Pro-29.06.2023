import React, { createContext, useState} from 'react';
import './App.css';
import Form from './components/Form/Form';
import TaskList from './components/TaskList/TaskList';

export const TaskListContext = createContext();
let taskId = 0;

function App() {
  const [tasks, setTasks] = useState([]);
  
  const addTask = (task) => {
    setTasks([{ id: taskId++, text: task, completed: false }, ...tasks]);
    console.log(tasks);
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    const indexToUpdate = updatedTasks.findIndex(task => task.id === index);
    updatedTasks[indexToUpdate].completed = !updatedTasks[indexToUpdate].completed;
    setTasks(updatedTasks);
    console.log(tasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    const indexToDelete = updatedTasks.findIndex(task => task.id === index);
    updatedTasks.splice(indexToDelete, 1);
    setTasks(updatedTasks);
  }

  return (
    <div className="App">
      <TaskListContext.Provider value={{tasks, addTask, toggleTask, deleteTask}}>
        <Form />
        <TaskList />
      </TaskListContext.Provider>
    </div>
  );
}

export default App;
