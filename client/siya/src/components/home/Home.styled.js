import styled from "styled-components";

export const HomeWrapper = styled.section``;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 992px) {
    flex-direction: row;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ecb365;
  }
  width: 80%;
  margin-left: 10%;
  margin-top: 10%;
  text-align: center;
  @media only screen and (min-width: 768px) {
    width: 70%;
    margin-left: 15%;
  }
  @media only screen and (min-width: 992px) {
    width: 30%;
    margin-left: 0;
    text-align: left;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  @media only screen and (min-width: 992px) {
    width: 40%;
  }
`;

export const ImageCover = styled.div`
  width: 70%;
  margin-left: 15%;
  background-color: #ecb365;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    object-fit: cover;
    filter: brightness(85%);
    height: 110%;
  }
  height: 40vh;
  border-radius: 100px;
  margin-top: 5%;
  /* img {
  } */
  @media only screen and (min-width: 768px) {
    width: 50%;
    margin-left: 25%;
  }
  @media only screen and (min-width: 992px) {
    width: 70%;
    height: 70vh;
    margin-left: 15%;
    margin-top: 10%;
    border-radius: 150px;
    img {
      height: 90%;
    }
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ecb365;
  }
  width: 90%;
  margin-left: 5%;
  margin-top: 5%;
  text-align: center;
  button {
    width: 120px;
    margin-left: 30px;
  }
  @media only screen and (min-width: 768px) {
    width: 70%;
    margin-left: 15%;
  }
  @media only screen and (min-width: 992px) {
    width: 30%;
    margin-left: 5%;
  }
`;

export const ButtonsCover = styled.div`
  margin-left: 5%;
  display: flex;
`;

export const H1 = styled.h1`
  color: rgba(225, 225, 225, 0.9);
  font-size: 74px;
  @media only screen and (max-width: 600px) {
    font-size: 42px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 74px;
  }
`;

export const H3 = styled.h3`
  color: rgba(225, 225, 225, 0.9);
`;

export const P = styled.p`
  color: rgba(225, 225, 225, 0.9);
`;
