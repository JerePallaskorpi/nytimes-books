import styled from 'styled-components';
import { colorMain } from '../../../defaultStyles';
import { StyledButton } from '../../../element/Button';

const StyledSingleCategory = styled(StyledButton)`
  border-left: 10px solid ${colorMain};
  padding: 0.5rem;
  margin: 0.5rem;
  width: 100%;
  max-width: 700px;
  font-weight: 600;
`;

export default StyledSingleCategory;
