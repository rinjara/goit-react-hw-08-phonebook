import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Nav, StyledLink } from './Navigation.styled';

function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">My Contacts</StyledLink>}
    </Nav>
  );
}

export default Navigation;
