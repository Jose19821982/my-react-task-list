import React from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';

const tasks = [
  { id: 1, name: 'Task 1', completed: false },
  { id: 2, name: 'Task 2', completed: true },
  
];

const App = () => {
  return (
    <div>
      <Header />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;

