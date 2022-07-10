import styled from 'styled-components';

const Review: any = styled.div`
  padding: 0.5rem 1rem;  
`;

const Summary = styled.div`
  a {
    word-break: break-word;
    color: blue;
  }
`;

const By = styled.div`
  text-align: right;
  font-weight: 300;
`;

Review.Summary = Summary;
Review.By = By;

export default Review;
