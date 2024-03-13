import { H1, H3, P } from "../Home.styled";
import { AboutMEPara, AboutMeText, AboutMeWrapper } from "./AboutMe.styled";

const AboutMe = () => {
  return (
    <AboutMeWrapper>
      <AboutMeText>
        <H1>About Me</H1>
        <AboutMEPara>
          <H3>How i got into programming</H3>
          <P>
            My first language was visual basic back in 2019 when i was in
            college ( Umfolozi TVET College ), i loved it so much i was doing
            projects everyday, learned about :
          </P>
          <ul>
            <li>Data types</li>
            <li>Arrays</li>
            <li>classes & Objects</li>
            <li>OOP (Object Orientated Programming)</li>
            <li>Database (My Sql)</li>
          </ul>
        </AboutMEPara>
        <AboutMEPara>
          <P>
            Then fast forward to 2021 i started pursuing web development and i
            never looked back i learned :
          </P>
          <ul>
            <li>Html </li>
          </ul>
          <ul>
            <li>Css</li>
          </ul>
          <P>i then pursued javascript in javascripti learned:</P>
          <ul>
            <li>Arrays</li>
          </ul>
          <ul>
            <li>Promises</li>
          </ul>
          <ul>
            <li>Callbacks</li>
          </ul>
          <ul>
            <li>Arrow functions</li>
          </ul>
          <ul>
            <li>async/await</li>
          </ul>
        </AboutMEPara>
        <AboutMEPara>
          <H3>javascript Frameworks & Libraries</H3>
          <P>
            After coding in javascript for months i wanted to add extra
            functionalities to my websites like storing data in Database and
            maybe autheticating users so i learned nodejs :
          </P>
          <ul>
            <li>Nodejs</li>
          </ul>
          <ul>
            <li>Npm</li>
          </ul>
        </AboutMEPara>
      </AboutMeText>
    </AboutMeWrapper>
  );
};

export default AboutMe;
