import { ErrorMessage, Field, Form } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 480px;
  gap: 20px;
`;

export const StyledLabel = styled.label`
  font-size: 25px;
  font-weight: 500;
  line-height: 24px;
`;

export const StyledInput = styled(Field)`
  text-align: center;
  width: 200px;
  height: 30px;
  font: bold italic large serif;
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  color: red;
`;

export const StyledButton = styled.button`
  width: 250px;
  height: 50px;
  text-transform: capitalize;
  font-weight: bold;
  font-size: large;
  text-align: center;

  padding: 0.6em 2em;
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:before {
    content: '';
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    -webkit-filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing-button-85 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  @keyframes glowing-button-85 {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }

  &:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #222;
    left: 0;
    top: 0;
    border-radius: 10px;
  }

  &:hover {
    transform: scale(1.2);
  }
`;
