import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';


const CustomCard = styled(Card)(({ theme }) => ({
  width: '100%', 
  maxWidth: '300px', 
  margin: 'auto',
  borderRadius: 8,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '20px',
}));

const IconContainer = styled(Box)(({ theme }) => ({
  fontSize: '60px', 
  marginBottom: '16px',
 
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  fontWeight: 600,
  marginBottom: '8px',
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  color: '#7F8C8D',
  marginBottom: '16px',
}));

const Price = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  fontWeight: 600,
  marginBottom: '16px',
  color: '#333',
}));

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#695aa6',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#594b9a',
  },
}));

function CardThree({ icon: Icon, title, description }) {
  return (
    <CustomCard>
      <IconContainer>
        <Icon />
      </IconContainer>
      <CardContent>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Price>$0.00/Month</Price>
        <CustomButton variant="contained">Learn More</CustomButton>
      </CardContent>
    </CustomCard>
  );
}

export default CardThree;
