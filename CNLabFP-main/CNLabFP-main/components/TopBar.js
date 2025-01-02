import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import { Menu as MenuIcon, Notifications, AccountCircle } from '@mui/icons-material';

const TopBar = () => {
  return (
    <AppBar position="static" sx={{ 
      background: 'linear-gradient(45deg, #4C1D95 30%,rgb(128, 63, 231) 90%)',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    }} >
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <img src="/logo.svg" alt="App Logo" style={{ height: '40px', marginRight: '16px' }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MailNet
          </Typography>
        </Box>
        <IconButton color="inherit">
          <Notifications />
        </IconButton>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;

