import React from 'react';
import './App.scss';
import Form from './components/Form/Form';
import TaskList from './components/TaskList/TaskList';
import { Provider } from 'react-redux';
import store from './store';


function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Form />
        <TaskList />
      </Provider>
    </div>
  );
}

export default App;
