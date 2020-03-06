import styled from '@emotion/styled';

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 3em;
  padding: 0;

  li {
    list-style-type: none;
  }
  li.ads {
    grid-column: 1/4;
  }
`;
