import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomCard = styled(Card)(({ theme }) => ({
  display: 'flex', 
  alignItems: 'center', 
  width: '40%', 
  maxWidth: '100%',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  margin: '25px', 
  position: 'relative',
}));

const Avatar = styled(Box)(({ theme }) => ({
  width: '120px',
  height: '120px',
  borderRadius: '50%',
  overflow: 'hidden',
  border: '5px solid #fff',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  marginRight: '20px',
}));

const AvatarImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const CardContentStyled = styled(CardContent)(({ theme }) => ({
  flex: 1, 
  padding: '20px',
  textAlign: 'left', 
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  color: '#7F8C8D',
  marginBottom: '8px',
}));

const Name = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  fontWeight: 600,
}));

function CardFour({ description, name, avatarSrc }) {
  return (
    <CustomCard>
      <Avatar>
        <AvatarImage src={avatarSrc} alt={name} />
      </Avatar>
      <CardContentStyled>
        <Description>{description}</Description>
        <Name>{name}</Name>
      </CardContentStyled>
    </CustomCard>
  );
}

export default CardFour;
