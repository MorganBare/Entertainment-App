import styled from "styled-components";

export const SideBarContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.semiDarkBlue};
  border-radius: 10px;
  min-height: 80vh;
  margin-top: 2em;
  max-width: 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;

  svg {
    transform: scale(1);

    // on hover change the color of the svg icon
    &:hover {
      fill: #fff;
    }
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    min-height: 70px !important;
  }
`;

export const MainLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20px;
  height: 200px;
  align-items: center;
  justify-content: space-between;
  margin-top: 3em;

  div {
    height: 20px;
  }
`;
