import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState(() => {
    // Obtener tareas almacenadas en localStorage 
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    return storedTasks;
  });

  useEffect(() => {
    // Guardar las tareas en localStorage 
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleCompleted = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId, newTitle, newDescription) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, name: newTitle, description: newDescription }
          : task
      )
    );
  };
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




