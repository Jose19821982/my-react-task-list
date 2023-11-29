import React from 'react';
import { Box, Flex, Text, Icon, Heading } from '@chakra-ui/react';
import { FaHtml5, FaCss3, FaJs, FaReact } from 'react-icons/fa';

const SobreNosotros = () => {
  return (
    <Flex align="center" justify="center" p={4} bg="teal" color="white">
      <Box>
        <Flex justify="center" mb={4}>
          <Icon as={FaHtml5} boxSize={6} mr={1} />
          <Icon as={FaCss3} boxSize={6} mr={1} />
          <Icon as={FaJs} boxSize={6} mr={1} />
          <Icon as={FaReact} boxSize={6} mr={1} />
        </Flex>
        <Heading as="h2" size="lg" mb={4}>
          Sobre Nosotros
        </Heading>
        <Text mt={2}>
          ¡Bienvenido a nuestra aplicación de gestión de tareas! Estamos emocionados de tenerte con nosotros.
          Esta aplicación fue creada con el objetivo de ayudarte a organizar tus labores diarias de manera eficiente.
        </Text>
        <Text mt={2}>
          Hemos utilizado diversas tecnologías para desarrollar esta aplicación, brindándote una experiencia
          agradable y fácil de usar.
        </Text>
        <Text mt={2}>
          La combinación de HTML, CSS, JavaScript, React y Chakra UI nos permite ofrecerte una plataforma
          robusta y funcional.
        </Text>
        <Text mt={2} mb={4}>
          ¡Esperamos que encuentres útil nuestra aplicación y que te ayude a mantenerte organizado en tu día a día!
        </Text>
      </Box>
    </Flex>
  );
};

export default SobreNosotros;












