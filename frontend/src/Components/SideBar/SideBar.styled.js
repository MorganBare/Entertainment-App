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
  justify-content: space-between;
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
  margin: 0 auto;
  margin-top: 3em;

  div {
    height: 20px;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 50%;
    height: 100%;
    margin: 0;
  }
`;

export const IconDiv = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    height: auto;
    margin: 0;
    width: 70%;
    justify-content: space-between;
  }
`;

export const Profile = styled.div`


  img {
    border: 1px solid white;
    border-radius: 20px;
  }

  @media screen and (max-width: 768px) {
    height: 30px;

    img {
      height: 30px;
    }
  }

`;