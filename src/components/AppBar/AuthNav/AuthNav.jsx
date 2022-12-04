import React from 'react';
import { StyledLink, Wrapper } from './AuthNav.styled';

function AuthNav() {
  return (
    <Wrapper>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log In</StyledLink>
    </Wrapper>
  );
}

export default AuthNav;
