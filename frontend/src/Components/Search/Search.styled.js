import styled from "styled-components";

export const SearchInput = styled.input`
    background-color: ${({ theme }) => theme.colors.darkBlue};
    width: 80%;
    border: none;
    height: 40px;

    &:focus {
        outline: none;
        border-bottom: 1px solid ${({ theme }) => theme.colors.greyishBlue};
    }
`;

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1em;
`;