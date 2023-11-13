import React, { useState } from 'react';

const Header = ({ addTask }) => {
  const [newTask, setNewTask] = useState({ name: '', description: '', completed: false });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.name.trim() !== '') {
      addTask(newTask);
      setNewTask({ name: '', description: '', completed: false });
    }
  };

  return (
    <header>
      <h1>My React Task List</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Task Name:
          <input
            type="text"
            name="name"
            value={newTask.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={newTask.description}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Add Task</button>
      </form>
    </header>
  );
};

export default Header;
