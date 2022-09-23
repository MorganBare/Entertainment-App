import styled from "styled-components";

export const HeroContainer = styled.div`
  margin: 1em;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(9, minmax(154px, 1fr));
  grid-gap: 1em;

  @media screen and (max-width: 1760px) {
    grid-template-columns: repeat(8, minmax(154px, 1fr));
  }

  @media screen and (max-width: 1600px) {
    grid-template-columns: repeat(7, minmax(154px, 1fr));
  }

  @media screen and (max-width: 1440px) {
    grid-template-columns: repeat(6, minmax(154px, 1fr));
  }

  @media screen and (max-width: 1160px) {
    grid-template-columns: repeat(5, minmax(154px, 1fr));
  }

  @media screen and (max-width: 985px) {
    grid-template-columns: repeat(4, minmax(154px, 1fr));
  }

  @media screen and (max-width: 690px) {
    grid-template-columns: repeat(3, minmax(154px, 1fr));
  }

  @media screen and (max-width: 526px) {
    grid-template-columns: repeat(2, minmax(154px, 1fr));
  }

`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.HeadingL};
  font-weight: ${({ theme }) => theme.fontWeight.Medium};
  margin-bottom: 15px;
`;

export const Section = styled.div`
  align-content: center;
`;
