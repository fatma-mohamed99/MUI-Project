import React, { useState } from 'react';
import { Box, Grid, TextField, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const Container = styled(Box)(({ theme }) => ({
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', 
}));

const InputWrapper = styled(Box)(({ theme }) => ({
    marginBottom: '20px',
}));

const SendButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#695aa6',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#594b9a',
    },
}));

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
    };

    return (
        <Container>
            <Typography
                variant="h6"
                style={{
                    color: '#7F8C8D',
                    marginBottom: '10px',
                    fontWeight: 500,
                    fontFamily: "'Baloo Paaji', cursive",
                }}
            >
                How can you communicate?
            </Typography>
            <Typography
                variant="h3"
                style={{
                    color: '#695aa6',
                    marginBottom: '30px',
                    fontWeight: 800,
                    fontFamily: "'Baloo Paaji', cursive",
                }}
            >
                Contact Me
            </Typography>
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                <InputWrapper>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Your Name"
                                variant="outlined"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Enter Email"
                                variant="outlined"
                                placeholder="Enter your email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                </InputWrapper>
                <TextField
                    fullWidth
                    label="Write Something"
                    variant="outlined"
                    placeholder="Write your message here"
                    multiline
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <Box mt={2} display="flex" justifyContent="center">
                    <SendButton type="submit" variant="contained">
                        Send Message
                    </SendButton>
                </Box>
            </form>
        </Container>
    );
}

export default ContactForm;
