import { Button } from '@mui/material';
// import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
// import { NavLink } from 'react-router-dom';

function UserNav() {
  // const { user } = useAuth();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <div>
      {/* <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink> */}
      {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> */}
      <p> Welcome, {user.name}</p>

      {/* </Typography> */}
      <Button type="button" color="inherit" onClick={handleLogOut}>
        Log Out
      </Button>
    </div>
  );
}

export default UserNav;
