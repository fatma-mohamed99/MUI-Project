import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const Container = styled(Box)(({ theme }) => ({
  backgroundColor: '#695aa6',
  color: '#fff',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
 Width: '100%',
}));

const TextContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  fontWeight: 600,
  marginBottom: '8px',
}));

const Subheading = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 400,
}));

const HireButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#ffffff',
  color: '#695aa6',
  borderRadius: '8px',
  padding: '10px 20px',
  '&:hover': {
    backgroundColor: '#e0e0e0',
  },
}));

function HireMe() {
  return (
    <Container>
      <TextContainer>
        <Heading>Want to work with me?</Heading>
        <Subheading>Always feel free to Contact & Hire me</Subheading>
      </TextContainer>
      <HireButton variant="contained">Hire Me</HireButton>
    </Container>
  );
}

export default HireMe;
