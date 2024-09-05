import React from 'react';
import { Card, CardMedia, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  width: 'calc(33.333% - 16px)', 
  height: '250px',
  overflow: 'hidden',
  borderRadius: 8,
  transition: 'transform 0.3s ease',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  margin: '8px',
  display: 'inline-block',
  verticalAlign: 'top',
  '&:hover .card-content': {
    opacity: 1,
  },
  '&:hover .card-media': {
    transform: 'scale(1.1)',
  },
}));

const StyledCardMedia = styled(CardMedia)({
  height: '100%',
  width: '100%',
  transition: 'transform 0.3s ease',
  objectFit: 'cover',
});

const CardContent = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  color: '#000',
  opacity: 0,
  transition: 'opacity 0.3s ease',
  padding: '20px',
  boxSizing: 'border-box',
  zIndex: 2,
});

const CardTitle = styled(Typography)({
  fontSize: '20px',
  fontWeight: 500,
  marginBottom: '10px',
  textAlign: 'center',
});

const CardDescription = styled(Typography)({
  fontSize: '16px',
  textAlign: 'center',
});

function CardTwo({ img, title, description }) {
  return (
    <StyledCard>
      <StyledCardMedia
        component="img"
        src={img}
        alt="Card Image"
        className="card-media"
      />
      <CardContent className="card-content">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </StyledCard>
  );
}

export default CardTwo;