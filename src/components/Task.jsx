

import React, { useState } from 'react';

const Task = ({ task, onToggleCompleted, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.name);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleToggleCompleted = () => {
    onToggleCompleted(task.id);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    onEdit(task.id, editedTitle, editedDescription);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    
    setEditedTitle(task.name);
    setEditedDescription(task.description);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button onClick={handleSaveEdit}>Save</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </>
      ) : (
        <>
          <span>{task.name}</span>
          <span>{task.description}</span>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={handleToggleCompleted}
            readOnly
          />
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </li>
  );
};

export default Task;






