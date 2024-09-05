import React from 'react';
import CardTwo from './CoustomComponent/CardTwo';
import img from '../assets/img/imgp.jpg';
import { Typography, Box } from '@mui/material';

export default function Portfolio() {
    return (
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

            <Typography variant="h5" style={{ color: '#7F8C8D', marginBottom: '10px' }}>
               
                What I Did ?
            </Typography>
            <Typography variant="h4" style={{ fontWeight: 500, fontFamily: 'Baloo Paaji, cursive', color: '#695aa6', marginBottom: '10px' }}>
                Portfolio
            </Typography>
            <Box style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                <CardTwo
                    img={img}
                    title="Project One"
                    description="This is a description for project one."
                />
                <CardTwo
                    img={img}
                    title="Project Two"
                    description="This is a description for project two."
                />
                <CardTwo
                    img={img}
                    title="Project Three"
                    description="This is a description for project three."
                />
            </Box>
        </div>
    );
}
