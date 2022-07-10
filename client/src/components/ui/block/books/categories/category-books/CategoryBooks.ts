import styled from 'styled-components';

const StyledCategoryBooks: any = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin: 1rem auto;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  
  div {
    padding: 0.25rem 0.5rem;
  }
  
  button {
    min-width: 75px;
    padding: 0.25rem;
    font-size: 14px;
  }
  
  div:last-of-type {
    font-weight: bold;
    text-align: right;
  }
`;

StyledCategoryBooks.Header = Header;

export default StyledCategoryBooks;
