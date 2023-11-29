import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.body.style.backgroundColor = 'teal';
    document.body.style.color = 'white';

    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    };
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
    }}>
      <h1>Welcome to the Todo List App</h1>
    </div>
  );
};

export default Home;






