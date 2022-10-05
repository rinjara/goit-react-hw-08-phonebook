import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
  margin-bottom: 40px;
  margin-top: 40px;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 500px;
`;

export const Paragraph = styled.p`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: baseline;
  justify-content: space-between;
  width: 300px;
`;

export const Text = styled.span`
  /* font-style: italic; */
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  text-shadow: 0 1px 1px #fff;
`;

export const DelButton = styled.button`
  all: unset;
  width: 70px;
  height: 25px;
  font-size: 16px;
  background: transparent;
  border: none;
  position: relative;
  color: #f0f0f0;
  cursor: pointer;
  z-index: 1;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &::after,
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -99999;
    transition: all 0.4s;
  }

  &::before {
    transform: translate(0%, 0%);
    width: 100%;
    height: 100%;
    background: #28282d;
    border-radius: 10px;
  }

  &::after {
    transform: translate(10px, 10px);
    width: 35px;
    height: 35px;
    background: #ffffff15;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-radius: 50px;
  }

  &:hover::before {
    transform: translate(5%, 20%);
    width: 110%;
    height: 110%;
  }

  &:hover::after {
    border-radius: 10px;
    transform: translate(0, 0);
    width: 100%;
    height: 100%;
  }

  &:active::after {
    transition: 0s;
    transform: translate(0, 5%);
  }
`;
