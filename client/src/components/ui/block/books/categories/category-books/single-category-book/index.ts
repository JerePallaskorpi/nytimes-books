import styled from 'styled-components';
import Header from './Header';
import Review from './Review';
import { shadowDefault } from '../../../../../defaultStyles';

const StyledSingleCategoryBook: any = styled.div`
  border-radius: 5px;
  background: white;
  box-shadow: ${shadowDefault};
`;

StyledSingleCategoryBook.Header = Header;
StyledSingleCategoryBook.Review = Review;

export default StyledSingleCategoryBook;
