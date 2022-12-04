import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 150px;
`;

export const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
`;
