import { MyButton } from "../header/Header.styled";
import { H4, P } from "../home/Home.styled";
import {
  CopyRight,
  FooterWrapper,
  LetWorkTogether,
  SocialMediaIcons,
  Thanks,
} from "./Footer.styled";
import {
  Facebook,
  Github,
  Instagram,
  Twitter,
  Whatsapp,
} from "react-bootstrap-icons";

const Footer = () => {
  return (
    <FooterWrapper>
      <LetWorkTogether>
        <div>
          <H4>Got a project in mind that you want us to work on ...?</H4>
        </div>
        <MyButton>Let's Do It</MyButton>
      </LetWorkTogether>
      <SocialMediaIcons>
        <Facebook />
        <Github />
        <Instagram />
        <Twitter />
        <Whatsapp />
      </SocialMediaIcons>
      <Thanks>
        <P>Thanks for visiting</P>
      </Thanks>
      <CopyRight>Siyabonga Mazibuko &copy;{new Date().getFullYear()}</CopyRight>
    </FooterWrapper>
  );
};

export default Footer;
