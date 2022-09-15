import styled from "styled-components";

export const SideBarContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.semiDarkBlue};
  border-radius: 10px;
  min-height: 80vh;
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em 0 0 0;
  justify-content: space-around;

  svg {
    transform: scale(1);
  }
`;
