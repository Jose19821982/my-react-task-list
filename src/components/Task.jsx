// components/Task.js
import React, { useState } from 'react';
import { Box, Text, Checkbox, Button, Input } from '@chakra-ui/react';

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
    <Box as="li" mb="2">
      {isEditing ? (
        <>
          <Input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            mb="2"
          />
          <Input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            mb="2"
          />
          <Button onClick={handleSaveEdit} colorScheme="teal" mr="2">
            Save
          </Button>
          <Button onClick={handleCancelEdit} colorScheme="gray">
            Cancel
          </Button>
        </>
      ) : (
        <>
          <Text fontSize="lg" fontWeight="bold" mr="2">
            {task.name}
          </Text>
          <Text mb="2">{task.description}</Text>
          <Checkbox
            isChecked={task.completed}
            onChange={handleToggleCompleted}
            mr="2"
          >
            Completed
          </Checkbox>
          <Button onClick={handleEdit} colorScheme="teal" mr="2">
            Edit
          </Button>
          <Button onClick={handleDelete} colorScheme="red">
            Delete
          </Button>
        </>
      )}
    </Box>
  );
};

export default Task;

         











