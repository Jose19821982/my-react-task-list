
// App.jsx
import React from 'react';
import { ChakraProvider, extendTheme, ColorModeScript, Container, Flex, useColorMode } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import TaskList from './components/TaskList';
import useTaskManager from './components/useTaskManager';
import Home from './Home';
import Menu from './Menu';
import SobreNosotros from './SobreNosotros';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'teal.500',
      },
    },
  },
});

const App = () => {
  const { tasks, addTask, toggleCompleted, deleteTask, editTask } = useTaskManager();
  const { colorMode } = useColorMode();

  return (
    <ChakraProvider theme={extendTheme(theme)}>
      <ColorModeScript initialColorMode={colorMode} />
      <style>
        {`
          body {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            background-color: gray.100;
          }
        `}
      </style>
      <Router>
        <Menu />
        <Flex minHeight="100vh" textAlign="center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/app"
              element={
                <Container maxW="md" p={4}>
                  <Header addTask={addTask} />
                  <TaskList
                    tasks={tasks}
                    onToggleCompleted={toggleCompleted}
                    onDelete={deleteTask}
                    onEdit={editTask}
                  />
                </Container>
              }
            />
            <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          </Routes>
        </Flex>
      </Router>
    </ChakraProvider>
  );
};

export default App;





































































