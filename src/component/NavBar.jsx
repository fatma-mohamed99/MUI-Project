import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';

const NavBar = ({ onToggleTheme, isDarkMode }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [bgColor, setBgColor] = useState('transparent');
  const trigger = useScrollTrigger();

  useEffect(() => {
    setBgColor(trigger ? '#fff' : 'transparent');
  }, [trigger]);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeToggle = () => {
    onToggleTheme();
  };

  return (
    <Slide in={true} direction="down">
      <AppBar
        position="fixed"
        sx={{
          top: 0,
          left: 0,
          width: '100%',
          backgroundColor: bgColor,
          boxShadow: 'none',
          transition: 'background-color 0.3s ease',
          padding: '0',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, color: '#000' }}>
              Fatma
            </Typography>
            <Box sx={{ flexGrow: 0 }}>
              <IconButton
                size="large"
                edge="end"
                color="#695aa6"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <IconButton
                size="large"
                margi
                edge="end"
                color="#695aa6"
                aria-label="theme-toggle"
                onClick={handleThemeToggle}
              >
                {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  '& .MuiMenuItem-root': {
                    minWidth: 'auto',
                    padding: '0 16px',
                  },
                }}
              >
                <MenuItem onClick={handleClose}>Home</MenuItem>
                <MenuItem onClick={handleClose}>About</MenuItem>
                <MenuItem onClick={handleClose}>Contact</MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
};

export default NavBar;
