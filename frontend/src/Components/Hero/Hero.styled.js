import styled from "styled-components";

export const HeroContainer = styled.div`
  margin: 1em;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(154px, 1fr) );
  grid-gap: 1em;
  padding: 1em;
`;
