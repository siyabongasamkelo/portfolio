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
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { saveAs } from "file-saver";
import cv from "../home/mycv.pdf";

const Home = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      // When in view, animate the text sliding up
    }
  }, [inView]);

  const downloadCv = () => {
    console.log(cv);
    saveAs(cv, "mycv.pdf"); // Download the photo file with the specified filename
  };

  return (
    <HomeWrapper>
      <Header />
      <HomeContainer ref={ref}>
        <Circle>
          <img src={Hero} alt="siya" />
        </Circle>
        <TextContainer>
          <ParagraphContainer>
            <P
              initial={{ y: 100 }}
              animate={inView ? { y: 0 } : { y: 100 }}
              transition={{ duration: 0.5 }}
            >
              Hard working passionate 23 year old full stack developer who likes
              to do fun & creative projects & work with other developers
            </P>
          </ParagraphContainer>
          <H3
            initial={{ y: 100 }}
            animate={inView ? { y: 0 } : { y: 100 }}
            transition={{ duration: 0.5 }}
          >
            I'm
          </H3>
          <H1
            initial={{ y: 100 }}
            animate={inView ? { y: 0 } : { y: 100 }}
            transition={{ duration: 0.5 }}
          >
            Siyabonga Mazibuko
          </H1>
          <H1
            initial={{ y: 100 }}
            animate={inView ? { y: 0 } : { y: 100 }}
            transition={{ duration: 0.5 }}
          >
            The Full Stack
          </H1>
          <H1
            initial={{ y: 100 }}
            animate={inView ? { y: 0 } : { y: 100 }}
            transition={{ duration: 0.5 }}
          >
            <span>Developer</span>
          </H1>
          <ButtonContainer>
            <MyButton onClick={downloadCv}>Download CV</MyButton>
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
