import { Button, Typography } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import React from 'react';
// import { NavLink } from 'react-router-dom';

function UserNav() {
  const { user } = useAuth();
  return (
    <div>
      {/* <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink> */}
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Welcome, {user}
      </Typography>
      <Button type="button" color="inherit">
        Log Out
      </Button>
    </div>
  );
}

export default UserNav;
