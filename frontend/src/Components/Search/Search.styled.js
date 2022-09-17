import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;

  svg {
    margin-right: 5px;
    transform: scale(0.8);
  }

  @media screen and (max-width: 768px) {
    margin-left: 0.3em;
  }
`;

export const SearchInput = styled.input`
  width: 50%;
  height: 50px;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0 10px;
  font-size: 16px;
  margin-bottom: 10px;
  color: #333;
  color: ${({ color }) => (color ? color : "#c3c4c7")};
  background-color: transparent;
  margin-top: 0.5em;

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
