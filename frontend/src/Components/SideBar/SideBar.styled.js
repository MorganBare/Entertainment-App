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
  margin-left: 1.5em;

  svg {
    transform: scale(1);

    // on hover change the color of the svg icon
    &:hover path{
      fill: ${({ theme }) => theme.colors.red};
    }
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    max-width: 100%;
    height: 56px;
    min-height: 56px;
    margin: 0;
    padding: 1em;
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

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 60%;
    height: auto;
    margin: 0;
  }
`;
