import {
  Envelope,
  Facebook,
  Github,
  Instagram,
  Telephone,
  Twitter,
  Whatsapp,
} from "react-bootstrap-icons";
import { MyButton } from "../header/Header.styled";
import { ParaCover } from "../home/AboutMe/AboutMe.styled";
import { H1, P } from "../home/Home.styled";
import {
  ContactCover,
  ContactDetails,
  ContactForm,
  ContactWrapper,
  Input,
  Label,
  SocialMediaIcons,
  Stack,
  TextArea,
} from "./Contact.styled";

const Contact = () => {
  return (
    <ContactWrapper>
      <H1>Contact Me</H1>
      <ParaCover>
        <P>These are some way that can be used to contact me</P>
      </ParaCover>
      <ContactCover>
        <ContactForm>
          <Label for="email">Email</Label>
          <Input
            placeholder="enter email...exampe@gmail.com"
            name="email"
            type="email"
          />
          <Label for="message">Email</Label>
          <TextArea
            placeholder="type your message here"
            name="message"
          ></TextArea>
          <MyButton>Send Message</MyButton>
        </ContactForm>
        <SocialMediaIcons>
          <Whatsapp />
          <Facebook />
          <Github />
          <Twitter />
          <Instagram />
        </SocialMediaIcons>
        <ContactDetails>
          <Stack>
            <Envelope /> <Label>Siyabongasamkelociam@gmail.com</Label>
          </Stack>
          <Stack>
            <Telephone /> <Label>061 189 2331</Label>
          </Stack>
        </ContactDetails>
      </ContactCover>
    </ContactWrapper>
  );
};

export default Contact;
