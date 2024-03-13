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
        </AboutMEPara>
        <AboutMEPara>
          <P>
            After getting the hang of nodejs i then started to explore reactjs i
            was hearing a lot about it and it really did live up to it
            expactations :
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
        </AboutMEPara>
      </AboutMeText>
    </AboutMeWrapper>
  );
};

export default AboutMe;
