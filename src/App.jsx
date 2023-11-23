
import React from 'react';
import { ChakraProvider, Box, Flex, extendTheme, ColorModeScript } from '@chakra-ui/react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import useTaskManager from './components/useTaskManager';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.100',
      },
    },
  },
});

const App = () => {
  const { tasks, addTask, toggleCompleted, deleteTask, editTask } = useTaskManager();

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript />
      <Flex
        minHeight="100vh"
        align="center"
        justify="center"
        style={{ width: '100vw' }}
      >
        <Box
          width="100%"
          maxW="md"
          p={4}
          bg="white"
          boxShadow="md"
          borderRadius="md"
        >
          <Header addTask={addTask} />
          <TaskList
            tasks={tasks}
            onToggleCompleted={toggleCompleted}
            onDelete={deleteTask}
            onEdit={editTask}
          />
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default App;





























