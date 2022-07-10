import styled from 'styled-components';

const Header: any = styled.div`
  display: flex;
  flex-direction: row;
  height: 100px;
  margin: 0.5rem 0;
`;

const Image = styled.img`
  height: 100%;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  justify-content: space-between;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  
  span:first-of-type {
    font-weight: bold; 
  }
`;

const Isbn = styled.div`
  font-weight: 300;
`;

const Rank = styled.div`
  font-size: 1.25rem;
  padding: 1rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-content: center;
  height: 25px;
  width: 25px;
  border-radius: 0 5px 0 5px;
`;

Header.Image = Image;
Header.Content = Content;
Header.Content.Title = Title;
Header.Content.Isbn = Isbn;
Header.Rank = Rank;

export default Header;
