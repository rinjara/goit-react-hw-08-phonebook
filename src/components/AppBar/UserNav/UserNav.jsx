import { Button } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { Wrapper } from './UserNav.styled';

function UserNav() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <Wrapper>
      <p> Welcome, {user.name}</p>
      <Button type="button" color="inherit" onClick={handleLogOut}>
        Log Out
      </Button>
    </Wrapper>
  );
}

export default UserNav;
