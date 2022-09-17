import styled from "styled-components";

export const CardContainer = styled.div`
  border-radius: 5px;
`;
export const ImageContainer = styled.div`
  margin: 0 auto;
`;
export const CardImage = styled.img`
  width: 100%;
  border-radius: 5px;
`;
export const CardContent = styled.div`
  margin-top: 0.5em;
  color: #fff;
  display: flex;
  align-items: center;

  span {
    margin-left: 0.5em;
  }

  svg {
    transform: scale(0.6);
  }
`;
export const Info = styled.span`
  color: #fff;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "13px")};
  color: ${({ color }) => (color ? color : "#c3c4c7")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "500")};
  display: ${({ display }) => (display ? display : "block")};
  padding: ${({ padding }) => (padding ? padding : "0")};

  // resize the svg icon
`;
export const CardTitle = styled.h3`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;
export const Paragraph = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;
