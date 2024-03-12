import styled from "styled-components";

export const HeaderWrapper = styled.header`
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.h3`
  color: rgba(225, 225, 225, 0.9);
  font-size: 1.5rem;
`;

export const Links = styled.div`
  a {
    text-decoration: none;
    color: rgba(225, 225, 225, 0.9);
    padding-left: 35px;
  }
  @media only screen and (max-width: 600px) {
    a {
      display: none;
    }
  }
`;

export const Action = styled.div`
  svg {
    fill: white;
    transform: scale(200%);
  }
  @media only screen and (max-width: 600px) {
    button {
      display: none;
    }
  }
`;

export const MyButton = styled.button`
  height: 42px;
  width: 160px;
  border: none;
  border-radius: 30px;
  color: white;
  background-color: #ecb365;
`;
