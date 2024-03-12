import styled from "styled-components";

export const HomeWrapper = styled.section``;

export const HomeContainer = styled.div`
  display: flex;
`;

export const TextContainer = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  span {
    color: #ecb365;
  }
`;

export const ImageContainer = styled.div`
  width: 40%;
`;

export const ImageCover = styled.div`
  height: 70vh;
  width: 70%;
  margin-left: 15%;
  margin-top: 10%;
  background-color: #ecb365;
  border-radius: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    object-fit: cover;
    filter: brightness(85%);
  }
`;

export const ActionContainer = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  span {
    color: #ecb365;
  }
`;

export const H1 = styled.h1`
  color: rgba(225, 225, 225, 0.9);
  font-size: 74px;
`;

export const H3 = styled.h3`
  color: rgba(225, 225, 225, 0.9);
`;

export const P = styled.p`
  color: rgba(225, 225, 225, 0.9);
`;
