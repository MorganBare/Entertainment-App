import styled from "styled-components";

export const CardContainer = styled.div`
  width: 154px;
  border-radius: 5px;
  justify-self: center;
  background-color: hsla(223, 36%, 14%, 0.4);
  -webkit-box-shadow: 0px 7px 23px 2px rgba(0,0,0,0.82); 
  box-shadow: 0px 7px 23px 2px rgba(0,0,0,0.82);

  &:hover {
    cursor: pointer;
    background-color: hsla(223, 36%, 14%, 0.8);
    transform: scale(1.05);
  }
`;
export const ImageContainer = styled.div`
  margin: 0 auto;
`;
export const CardImage = styled.img`
  width: 100%;
  border-radius: 5px;
`;
export const CardContent = styled.div`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: .5em;
  padding-inline: .2em;
  svg {
    transform: scale(0.7);
  }
`;
export const Info = styled.span`
  font-size: ${({ theme }) => theme.fontSize.BodyS};
`;
export const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.BodyM};
  font-weight: ${({ theme }) => theme.fontWeight.Medium};
  padding-top: .5em;
  padding-bottom: .2em;
  text-align: center;
`;
export const Paragraph = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;
