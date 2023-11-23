
import React, { useState } from 'react';
import {
  Heading,
  Box,
  Input,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';

const Header = ({ addTask }) => {
  const [newTask, setNewTask] = useState({ name: '', description: '', completed: false });
  const [nameError, setNameError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({ ...prevTask, [name]: value }));

    // Validaciones
    if (name === 'name') {
      setNameError(value.length < 3 ? 'Name must be at least 3 characters' : '');
    } else if (name === 'description') {
      setDescriptionError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.name.trim() !== '' && nameError === '' && descriptionError === '') {
      addTask(newTask);
      setNewTask({ name: '', description: '', completed: false });
    } else {
      // Mostrar mensaje de error
      alert('Invalid input. Please check the form.');
    }
  };

  return (
    <Box as="header" textAlign="center" mb="4">
      <Heading as="h1" size="xl" mb="4">
        My React Task List
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl mb="2" isInvalid={nameError !== ''}>
          <FormLabel>Task Name:</FormLabel>
          <Input
            type="text"
            name="name"
            value={newTask.name}
            onChange={handleInputChange}
          />
          <FormErrorMessage>{nameError}</FormErrorMessage>
        </FormControl>
        <FormControl mb="2" isInvalid={descriptionError !== ''}>
          <FormLabel>Description:</FormLabel>
          <Input
            type="text"
            name="description"
            value={newTask.description}
            onChange={handleInputChange}
          />
          <FormErrorMessage>{descriptionError}</FormErrorMessage>
        </FormControl>
        <Button type="submit" colorScheme="teal">
          Add Task
        </Button>
      </form>
    </Box>
  );
};

export default Header;
