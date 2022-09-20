import styled from "styled-components";

export const HeroContainer = styled.div`
  margin: 1em;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(154px, 1fr) );
  grid-gap: 1em;
`;


export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.HeadingL};
  font-weight: ${({ theme }) => theme.fontWeight.Medium};
`;