import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    width: 992px;
  }

`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-gap: .5rem;
`;