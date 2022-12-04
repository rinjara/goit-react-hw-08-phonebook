import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 180px;
`;

export const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
`;
