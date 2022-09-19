import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 11fr;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
