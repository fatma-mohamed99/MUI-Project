import React from 'react';
import { Button, styled } from '@mui/material';

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'transparent',
  border: `1px solid #695aa6`,
  color: '#695aa6',
  borderRadius: '100px',
  padding: '2px',
  fontSize: '1rem',
  lineHeight: '1.5',
  textTransform: 'none',
  fontWeight: 400,
  transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
  '&:hover': {
    backgroundColor: '#695aa6',
    color: '#fff',
    border: `1px solid #695aa6`,
  },
}));

export default function CVBtn({ onClick, sx }) {
  return (
    <CustomButton
      variant="outlined"
      onClick={onClick}
      sx={sx}
    >
      Download CV
    </CustomButton>
  );
}
