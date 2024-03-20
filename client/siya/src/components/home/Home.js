import Header from "../header/Header";
import {
  HomeContainer,
  HomeWrapper,
  H1,
  H3,
  P,
  TextContainer,
  Circle,
  ButtonContainer,
  ParagraphContainer,
} from "./Home.styled";
import Hero from "../img/Hero.png";
import { MyButton, SecondaryButton } from "../header/Header.styled";
import { HashLink as Link } from "react-router-hash-link";

const Home = () => {
  return (
    <HomeWrapper>
      <Header />
      <HomeContainer>
        <Circle>
          <img src={Hero} alt="siya" />
        </Circle>
        <TextContainer>
          <ParagraphContainer>
            <P>
              Hard working passionate 23 year old full stack developer who likes
              to do fun & creative projects & work with other developers
            </P>
          </ParagraphContainer>
          <H3>I'm </H3>
          <H1>Siyabonga Mazibuko</H1>
          <H1>The Full Stack</H1>
          <H1>
            <span>Developer</span>
          </H1>
          <ButtonContainer>
            <MyButton>Download CV</MyButton>
            <Link to={"#projects"}>
              <SecondaryButton>See Projects</SecondaryButton>
            </Link>
          </ButtonContainer>
        </TextContainer>
      </HomeContainer>
    </HomeWrapper>
  );
};

export default Home;
