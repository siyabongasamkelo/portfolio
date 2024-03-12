import Header from "../header/Header";
import { HomeContainer, HomeWrapper } from "./Home.styled";

const Home = () => {
  return (
    <HomeWrapper>
      <Header />
      <HomeContainer></HomeContainer>
    </HomeWrapper>
  );
};

export default Home;
