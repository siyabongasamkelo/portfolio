import { H1, P } from "../Home.styled";
import {
  AboutCard,
  AboutCardContainer,
  AboutMeText,
  AboutMeWrapper,
  CardNumber,
  CardTitle,
  ParaContainer,
  ParaCover,
} from "./AboutMe.styled";

const AboutMe = () => {
  return (
    <AboutMeWrapper id="about">
      <AboutMeText>
        <H1>About Me</H1>
        <ParaCover>
          <P>
            I live and breath code, being a developer has always been my dream
            ever since i was a kid. I was always obsessed with computers and i
            still can't believe that i'm able to write instructions that a
            computer can understand.
          </P>
        </ParaCover>
        <AboutCardContainer>
          <AboutCard>
            <CardNumber>1</CardNumber>
            <CardTitle>How i got into coding ?</CardTitle>
            <ParaContainer>
              <P>
                My first language was visual basic back in 2019 when i was in
                college ( Umfolozi TVET College ), i loved it so, learned about
                :
              </P>
              <ul>
                <li>Data types</li>
                <li>Arrays</li>
                <li>classes & Objects</li>
                <li>OOP (Object Orientated Programming)</li>
                <li>Database (My Sql)</li>
              </ul>
            </ParaContainer>
          </AboutCard>

          <AboutCard>
            <CardNumber>2</CardNumber>
            <CardTitle>How i got into web development ?</CardTitle>
            <ParaContainer>
              <P>
                Then fast forward to 2021 i started pursuing web development and
                i learned :
              </P>
              <ul>
                <li>Html </li>
                <li>Css</li>
              </ul>
              <P>i then pursued javascript in javascripti learned:</P>
              <ul>
                <li>ES6</li>
                <li>Arrays</li>
                <li>Promises</li>
                <li>Callbacks</li>
                <li>Arrow functions</li>
                <li>async/await</li>
                <li>Debugging and Troubleshooting</li>
              </ul>
            </ParaContainer>
          </AboutCard>

          <AboutCard>
            <CardNumber>3</CardNumber>
            <CardTitle>Nodejs</CardTitle>
            <ParaContainer>
              <P>
                After coding in javascript for months i wanted to add extra
                functionalities to my websites like storing data in Database and
                maybe autheticating users so i learned nodejs :
              </P>
              <ul>
                <li>Nodejs</li>
                <li>Npm</li>
                <li>Express</li>
                <li>Restful Api</li>
                <li>Authetication & Authorization</li>
                <li>Server Side coding</li>
                <li>Authetication & Authorization</li>
                <li>Data Security & Protection</li>
                <li>Code Reusability</li>
                <li>PayPal</li>
              </ul>
            </ParaContainer>
          </AboutCard>

          <AboutCard>
            <CardNumber>4</CardNumber>
            <CardTitle>Reactjs</CardTitle>
            <ParaContainer>
              <P>
                After getting the hang of nodejs i then started to explore
                reactjs i was hearing a lot about it and it really did live up
                to it expactations :
              </P>
              <ul>
                <li>ReactJs</li>
                <li>Styled-Components</li>
                <li>Bootstrap</li>
                <li>Redux</li>
                <li>FrontEnd Design</li>
                <li>Git</li>
                <li>React Query</li>
                <li>Formik & Yup</li>
                <li>PayPal</li>
              </ul>
            </ParaContainer>
          </AboutCard>
        </AboutCardContainer>
      </AboutMeText>
    </AboutMeWrapper>
  );
};

export default AboutMe;
