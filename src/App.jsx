
import React from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import useTaskManager from './components/useTaskManager';

const App = () => {
  const {
    tasks,
    addTask,
    toggleCompleted,
    deleteTask,
    editTask,
  } = useTaskManager();
   return (
    <div>
      <Header addTask={addTask} />
      <TaskList
        tasks={tasks}
        onToggleCompleted={toggleCompleted}
        onDelete={deleteTask}
        onEdit={editTask}
      />
    </div>
  );
};

export default App;






