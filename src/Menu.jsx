
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Icon } from '@chakra-ui/react';
import { FaHome, FaAppStore, FaInfoCircle, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Menu = () => {
  return (
    <Flex bg="teal.500" p={4} color="white" align="center" justify="center">
      <Link to="/">
        <Icon as={FaHome} boxSize={6} mr={2} />
        Home
      </Link>
      <Box mx={4}>|</Box>
      <Link to="/app">
        <Icon as={FaAppStore} boxSize={6} mr={2} />
        App
      </Link>
      <Box mx={4}>|</Box>
      <Link to="/sobre-nosotros">
        <Icon as={FaInfoCircle} boxSize={6} mr={2} />
        Sobre Nosotros
      </Link>
      <Box mx={4}>|</Box>
      {/* Add social media links with icons */}
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <Icon as={FaFacebook} boxSize={6} mr={2} />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <Icon as={FaTwitter} boxSize={6} mr={2} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <Icon as={FaInstagram} boxSize={6} mr={2} />
      </a>
    </Flex>
  );
};

export default Menu;









