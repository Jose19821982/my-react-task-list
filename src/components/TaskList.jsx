
import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onToggleCompleted, onDelete, onEdit }) => {
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onToggleCompleted={onToggleCompleted}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;




