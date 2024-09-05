import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, GitHub, Pinterest, YouTube, WhatsApp } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const FooterContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#fff',
    color: 'rgba(0, 0, 0, 0.7)',
    borderTop: '1px solid #ddd',
}));

const SocialIcons = styled(Box)(({ theme }) => ({
    display: 'flex',
}));

const Footer = () => {
    return (
        <FooterContainer>
            <Typography variant="body2">
                Copyright 2024 ©All Rights Reserved. </Typography>
            <SocialIcons>
                <IconButton href="https://facebook.com" target="_blank" aria-label="Facebook">
                    <Facebook />
                </IconButton>
                <IconButton href="https://twitter.com" target="_blank" aria-label="Twitter">
                    <Twitter />
                </IconButton>
                <IconButton href="https://instagram.com" target="_blank" aria-label="Instagram">
                    <Instagram />
                </IconButton>
                <IconButton href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                    <LinkedIn />
                </IconButton>
                <IconButton href="https://github.com" target="_blank" aria-label="GitHub">
                    <GitHub />
                </IconButton>
                <IconButton href="https://pinterest.com" target="_blank" aria-label="Pinterest">
                    <Pinterest />
                </IconButton>
                <IconButton href="https://youtube.com" target="_blank" aria-label="YouTube">
                    <YouTube />
                </IconButton>
                <IconButton href="https://wa.me/" target="_blank" aria-label="WhatsApp">
                    <WhatsApp />
                </IconButton>
            </SocialIcons>
        </FooterContainer>
    );
};

export default Footer;
