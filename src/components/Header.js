import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Badge,
  Avatar,
  Box
} from '@mui/material';
import {
  Search,
  Notifications,
  Menu as MenuIcon
} from '@mui/icons-material';

const Header = () => {
  return (
    <AppBar position="static" elevation={2}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: 'bold' }}
        >
          Alumni Student Portal
        </Typography>

        {/* Search Bar */}
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search alumni, events, jobs..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: 'text.secondary' }} />
              </InputAdornment>
            ),
            sx: { 
              backgroundColor: 'white',
              borderRadius: 1,
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none'
              }
            }
          }}
          sx={{ 
            minWidth: 300,
            mr: 2,
            display: { xs: 'none', md: 'block' }
          }}
        />

        {/* Notifications */}
        <IconButton color="inherit" sx={{ mr: 1 }}>
          <Badge badgeContent={3} color="error">
            <Notifications />
          </Badge>
        </IconButton>

        {/* User Profile */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Avatar 
            sx={{ 
              width: 32, 
              height: 32, 
              bgcolor: 'secondary.main',
              fontSize: '0.875rem'
            }}
          >
            S
          </Avatar>
          <Typography variant="body2" sx={{ display: { xs: 'none', sm: 'block' } }}>
            Student
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;