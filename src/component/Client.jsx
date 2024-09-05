import React from 'react';
import CardFour from './CoustomComponent/CardFour';
import cli1 from '../assets/img/images.jpeg';
import cli2 from '../assets/img/woman.webp';
import { Typography, Box } from '@mui/material';

export default function Client() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Typography
        variant="h6"
        style={{
          color: '#7F8C8D',
          marginBottom: '20px',
          fontWeight: 500,
          fontFamily: "'Baloo Paaji', cursive",
        }}
      >
        What Think Client About Me?
      </Typography>
      <Typography
        variant="h3"
        style={{
          color: '#695aa6',
          marginBottom: '40px',
          fontWeight: 800,
          fontFamily: "'Baloo Paaji', cursive",
        }}
      >
        Testimonial
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        gap="15px" 
        padding="5px" 
      >
        <CardFour
          description="A highly skilled professional with a passion for development."
          name="John Doe"
          avatarSrc={cli1}
        />
        <CardFour
          description="An expert with a deep understanding of user needs and design."
          name="Jane Smith"
          avatarSrc={cli2}
        />
      </Box>
    </div>
  );
}
