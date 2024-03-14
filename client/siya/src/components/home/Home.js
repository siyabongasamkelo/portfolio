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
import { MyButton } from "../header/Header.styled";

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
              Smart working passionate 23 year old full stack developer who
              likes to do fun & creative projects & work with other developers
            </P>
          </ParagraphContainer>
          <H3>I'm </H3>
          <H1>Siyabonga Mazibuko</H1>
          <H1>The Full Stack</H1>
          <H1>
            <span>Developer</span>
          </H1>
          <ButtonContainer>
            <MyButton>Download Resume</MyButton>
            <MyButton>See Projects</MyButton>
          </ButtonContainer>
        </TextContainer>
      </HomeContainer>
    </HomeWrapper>
  );
};

export default Home;
