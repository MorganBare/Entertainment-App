import styled from "styled-components";

// export const HeroContainer = styled.div`
//   margin: 1em;
// `;

// export const Row = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 2rem;
// `;
export const HeroContainer = styled.div`
  margin: 1em;
`;

export const Row = styled.div`
  display: grid;
<<<<<<< HEAD
  grid-template-columns: repeat( auto-fit, minmax(154px, 1fr) );
  grid-gap: 1em;
  padding: 1em;
=======
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
>>>>>>> main
`;
