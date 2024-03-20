import styled from "styled-components";
import { MyButton } from "../header/Header.styled";

export const ContactWrapper = styled.section`
  margin-top: 15%;
  @media only screen and (max-width: 600px) {
    h1,
    p {
      text-align: center;
    }
  }
  @media only screen and (min-width: 768px) {
    h1,
    p {
      text-align: center;
    }
  }
  @media only screen and (min-width: 992px) {
    h1,
    p {
      text-align: left;
    }
  }
`;

export const ContactCover = styled.div``;

export const ContactForm = styled.form`
  width: 30%;
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 20px;
  background-color: #113946;
  button {
    margin-top: 5%;
  }
  @media only screen and (max-width: 600px) {
    width: 90%;
    margin-left: 5%;
  }
  @media only screen and (min-width: 768px) {
    width: 47%;
    margin-top: 5%;
  }
  @media only screen and (min-width: 992px) {
    width: 30%;
  }
`;

export const Input = styled.input`
  border-radius: 10px;
  padding: 10px;
`;

export const Label = styled.label`
  color: rgba(225, 225, 225, 0.9);
  padding-top: 5%;
  padding-bottom: 5%;
`;

export const ErrorLabel = styled(Label)`
  color: red;
`;

export const TextArea = styled.textarea`
  height: 25vh;
  border-radius: 10px;
  padding: 10px;
`;

export const SocialMediaIcons = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  background-color: #113946;
  padding: 20px;
  border-radius: 30px;
  margin-top: 3%;
  svg {
    transform: scale(1.5);
    fill: rgba(225, 225, 225, 0.9);
    cursor: pointer;
    transition: 0.5s ease-in-out;
    &:hover {
      fill: #e8751a;
    }
  }
  @media only screen and (max-width: 600px) {
    width: 90%;
    margin-left: 5%;
  }
  @media only screen and (min-width: 768px) {
    width: 47%;
  }
  @media only screen and (min-width: 992px) {
    width: 30%;
  }
`;

export const ContactDetails = styled.div`
  background-color: #113946;
  color: rgba(225, 225, 225, 0.9);
  width: 30%;
  margin-top: 3%;
  border-radius: 10px;
  padding: 20px;
  @media only screen and (max-width: 600px) {
    width: 90%;
    margin-left: 5%;
  }
  @media only screen and (min-width: 768px) {
    width: 47%;
  }
  @media only screen and (min-width: 992px) {
    width: 30%;
  }
`;

export const Stack = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    transform: scale(1.5);
  }
`;

export const SubmitButton = styled(MyButton)`
  width: 100%;
`;
