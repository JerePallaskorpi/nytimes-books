import styled from 'styled-components';
import { colorMain, shadowDefault } from '../defaultStyles';

export const StyledButton = styled.button`
  background: white;
  box-shadow: ${shadowDefault};
  border-radius: 5px;
  text-align: center;
  border: none;

  &:hover {
    cursor: pointer;
    background: ${colorMain};
    color: white;
  }
`;
