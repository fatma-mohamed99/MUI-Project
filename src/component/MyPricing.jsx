import React from 'react';
import CardThree from '../component/CoustomComponent/CardThree';
import { Box, Typography } from '@mui/material';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';

export default function MyPricing() {
  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center"
      padding="20px"
    >
      <Box textAlign="center" marginBottom="40px">
     
   
        <Typography
          variant="h6"
          style={{
            color: '#7F8C8D',
            marginBottom: '10px',
            fontWeight: 500,
            fontFamily: "'Baloo Paaji', cursive",
          }}
        >
          How Much I Charge ?
        </Typography>
      </Box>
      <Typography
        variant="h3"
        style={{
          color: '#695aa6',
          marginBottom: '40px',
          fontWeight: 800,
          fontFamily: "'Baloo Paaji', cursive",
        }}
      >
        My Pricing
      </Typography>
      <Box 
        display="flex" 
        justifyContent="center" 
        flexWrap="wrap" 
        gap="20px"
      >
        <CardThree 
          icon={DeliveryDiningIcon} 
          title="Free" 
          description="We provide top-notch car repair and maintenance services."
        />
        <CardThree 
          icon={DirectionsBusIcon} 
          title="Basic" 
          description="Expert repairs and services for all types of motorcycle services."
        />
        <CardThree 
          icon={AirplanemodeActiveIcon} 
          title="Premium" 
          description="Professional services for aircraft maintenance and repair."
        />
      </Box>
    </Box>
  );
}
