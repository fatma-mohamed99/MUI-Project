import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import headerImage from '../assets/img/header.jpg';

const Header = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        backgroundImage: `url(${headerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        textAlign: 'center',
        gap: 2,
        pt: '64px', 
        px: 2,
        marginTop: 0, 
      }}
    >
      <Typography 
        variant="h3" 
        sx={{ 
          fontSize: '2.4rem', 
          fontWeight: '900',
          color: '#444',
          '@media (max-width:600px)': {
            fontSize: '1.8rem', 
          },
        }}
      >
        Hi!
      </Typography>
      <Typography 
        variant="h4" 
        sx={{ 
          fontSize: '2.4rem', 
          fontWeight: '900',
          color: '#444',
          '@media (max-width:600px)': {
            fontSize: '1.8rem', 
          }
        }}
      >
       I am Fatma Mohamed
      </Typography>
      <Typography 
        variant="h6" 
        sx={{ 
          fontSize: '1.7rem', 
          opacity:'0.8',
          fontWeight: '300',
          color: '#111',
          '@media (max-width:600px)': {
            fontSize: '1.1rem', 
          },
        }}
      >
        Front-End Web Developer
      </Typography>
      <Button
      variant="contained"
      sx={{
        marginTop: '20px',
        backgroundColor: '#695aa6',
        color: '#fff',
        borderColor: '#695aa6',
        
      }}
    >
      Visit My Work
    </Button>
    </Box>
  );
};

export default Header;
