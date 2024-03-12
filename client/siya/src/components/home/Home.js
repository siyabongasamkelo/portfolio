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
} from "./Home.styled";
import Hero from "../img/Hero.png";

const Home = () => {
  return (
    <HomeWrapper>
      <Header />
      <HomeContainer>
        <TextContainer>
          <div>
            <H3>I am</H3>
            <H1>Siyabonga Mazibuko</H1>
            <H3>The web developer</H3>
          </div>
        </TextContainer>
        <ImageContainer>
          <ImageCover>
            <img src={Hero} alt="hero" />
          </ImageCover>
        </ImageContainer>
        <ActionContainer></ActionContainer>
      </HomeContainer>
    </HomeWrapper>
  );
};

export default Home;
