import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  width: 'calc(20% - 16px)',
  margin: '8px',
  overflow: 'hidden',
  borderRadius: 8,
  transition: 'transform 0.3s ease',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  display: 'inline-block',
  verticalAlign: 'top',
  display: 'flex',
  flexDirection: 'column', 
  alignItems: 'center', 
  justifyContent:'center',
  '&:hover': {
    '& .MuiCardMedia-root': {
      transform: 'scale(0.8)',
    },
    '& .card-title': {
      opacity: 0,
    },
    '& .card-description': {
      bottom: 0,
      opacity: 1,
    },
  },
}));

const CustomCardMedia = styled(CardMedia)({
    width: "100px",
  height:"100px",
  transition: 'transform 0.3s ease',
});

const CardTitle = styled(Typography)({
  fontSize: 18,
  color: '#000',
  transition: 'opacity 0.3s ease',
});

const CardDescription = styled(Box)({
  position: 'absolute',
  bottom: '-100%', 
  left: 0,
  width: '100%',
  padding: '20px',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  color: '#000',
  textAlign: 'center',
  fontSize: 16,
  transition: 'bottom 0.3s ease, opacity 0.3s ease',
  opacity: 0,
  boxSizing: 'border-box',
  zIndex: 2,
});

function CardCoustom({ img, title, description }) {
  return (
    <CustomCard>
      <CustomCardMedia
        component="img"
        image={img}
        alt="Card Image"
      />
      <CardContent>
        <CardTitle className="card-title">{title}</CardTitle>
      </CardContent>
      <CardDescription className="card-description">
        <Typography>{description}</Typography>
      </CardDescription>
    </CustomCard>
  );
}

export default CardCoustom;