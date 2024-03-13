import Header from "../header/Header";
import {
  ActionContainer,
  HomeContainer,
  HomeWrapper,
  ImageContainer,
  TextContainer,
  ImageCover,
  H1,
  H3,
  P,
  ButtonsCover,
} from "./Home.styled";
import Hero from "../img/Hero.png";
import { MyButton } from "../header/Header.styled";

const Home = () => {
  return (
    <HomeWrapper>
      <Header />
      <HomeContainer>
        <TextContainer>
          <div>
            <H3>I am</H3>
            <H1>Siyabonga Mazibuko</H1>
            <H3>
              <span>The web developer</span>
            </H3>
          </div>
        </TextContainer>
        <ImageContainer>
          <ImageCover>
            <img src={Hero} alt="hero" />
          </ImageCover>
        </ImageContainer>
        <ActionContainer>
          <div>
            <P>
              I am a very <span>passionate</span> web developer who specializes
              in both <span>Front end & Back end</span>&nbsp;and is always
              working hard &nbsp;<span>everyday</span> to improve his skills
            </P>
            <ButtonsCover>
              <MyButton>My Projects</MyButton>
              <MyButton>DownLoad Cv</MyButton>
            </ButtonsCover>
          </div>
        </ActionContainer>
      </HomeContainer>
    </HomeWrapper>
  );
};

export default Home;
