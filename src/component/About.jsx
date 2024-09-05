import React from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import img from "../assets/img/pnim.png"; 
import CVBtn from './CoustomComponent/CVBtn';

const SectionContainer = styled(Box)({
  backgroundColor: '#f4f4f4',  
  padding: '20px',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
   Width: '100%'
});

const StyledImage = styled('img')({
  maxWidth: '500px',  
 
  borderRadius: '8px',
  margin: '40px',
});

const TextContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

function About() {
  return (
    <SectionContainer>
      <StyledImage src={img} alt="About Image" />
      <TextContainer>
        <Typography variant="h6" gutterBottom>
          Who I Am
        </Typography>
        <Typography variant="h4" paragraph sx={{ color: '#695aa6' }}>
          About
        </Typography>
        <Typography variant="body2" sx={{ margin: '5px' }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aliquid ad provident aut fuga animi soluta quae eos non cupiditate voluptates dolorem, doloremque quos dicta quibusdam impedit iure nemo a iste
          culpa! Quasi quibusdam hic recusandae delectus velit officiis explicabo voluptatibus! Nemo esse similique, voluptates labore distinctio, placeat explicabo facilis molestias, blanditiis culpa iusto voluptatem ratione eligendi a, quia temporibus velit vero ipsa sint ex voluptatum expedita aliquid! Debitis, nam!
        </Typography>
       
        <CVBtn  sx={{
            marginTop: '20px',
            width: '30%',
          }}  />
      </TextContainer>
    </SectionContainer>
  );
}

export default About;
