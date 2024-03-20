import styled from "styled-components";

export const HeaderWrapper = styled.header`
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.h3`
  a {
    color: rgba(225, 225, 225, 0.9);
    text-decoration: none;
    font-size: 1.5rem;
    transition: 0.5s ease-in-out;
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.dark.primary};
    }
  }
`;

export const Links = styled.div`
  a {
    text-decoration: none;
    color: rgba(225, 225, 225, 0.9);
    padding-left: 35px;
    transition: 0.5s ease-in-out;
    &:hover {
      color: ${({ theme }) => theme.dark.primary};
    }
  }
  @media only screen and (max-width: 600px) {
    a {
      display: none;
    }
  }
  @media only screen and (min-width: 768px) {
    a {
      display: none;
    }
  }
  @media only screen and (min-width: 992px) {
    a {
      display: inline-block;
    }
  }
`;

export const Action = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    fill: rgba(225, 225, 225, 0.9);
    transform: scale(200%);
    display: none;
    transition: 0.5s ease-in-out;
    cursor: pointer;
    &:hover {
      fill: ${({ theme }) => theme.dark.primary};
    }
  }
  .alldevices {
    display: block;
  }
  @media only screen and (max-width: 600px) {
    width: 30%;
    display: flex;
    justify-content: space-between;
    button {
      display: none;
    }
    svg {
      display: block;
    }
  }
  @media only screen and (min-width: 768px) {
    width: 15%;
    display: flex;
    justify-content: space-between;
    button {
      display: none;
    }
    svg {
      display: block;
    }
  }
  @media only screen and (min-width: 992px) {
    width: 20%;
    svg {
      display: none;
    }
    button {
      display: block;
    }
  }
`;

export const MyButton = styled.button`
  height: 42px;
  width: 160px;
  border: none;
  border-radius: 30px;
  color: white;
  background-color: ${({ theme }) => theme.dark.primary};
`;

export const SecondaryButton = styled(MyButton)`
  background-color: ${({ theme }) => theme.dark.secondary};
`;
