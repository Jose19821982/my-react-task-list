// components/TaskList.js
import React from 'react';
import { Box, Heading, UnorderedList } from '@chakra-ui/react';
import Task from './Task';

const TaskList = ({ tasks, onToggleCompleted, onDelete, onEdit }) => {
  return (
    <Box>
      <Heading as="h2" size="lg" mb="4">
        Task List
      </Heading>
      <UnorderedList>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onToggleCompleted={onToggleCompleted}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </UnorderedList>
    </Box>
  );
};

export default TaskList;






