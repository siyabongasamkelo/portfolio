import { H1 } from "./Home.styled";
import {
  MySkillCover,
  MySkillsWrapper,
  SkillCard,
  Stack,
} from "./MySkills.styled";

const MySkills = () => {
  return (
    <MySkillsWrapper>
      <H1>My Skills</H1>
      <MySkillCover>
        <SkillCard>
          <Stack>Front End</Stack>
          <ul>
            <li>Html</li>
            <li>Css</li>
            <li>javascript</li>
            <li>Reactjs</li>
            <li>Bootstrap</li>
            <li>Redux/Redux-Toolkit</li>
            <li>Styled-Components</li>
          </ul>
        </SkillCard>
        <SkillCard>
          <Stack>Back End</Stack>
          <ul>
            <li>Nodejs</li>
            <li>Express</li>
            <li>MongoDb</li>
            <li>SocketIO</li>
            <li>My Sql</li>
            <li>Visual basic</li>
            <li>C#</li>
          </ul>
        </SkillCard>
        <SkillCard>
          <Stack>Dev Tools</Stack>
          <ul>
            <li>Git</li>
            <li>Git Hub</li>
            <li>Visual Studio Code</li>
            <li>Netlify</li>
            <li>Render</li>
            <li>Cloudinary</li>
          </ul>
        </SkillCard>
        <SkillCard>
          <Stack>Soft Skills</Stack>
          <ul>
            <li>Team work</li>
            <li>Accountability</li>
            <li>Empathy</li>
            <li>Critical Thinking</li>
            <li>Problem solving</li>
            <li>Emotional Intelligence</li>
            <li>Hard Working</li>
          </ul>
        </SkillCard>
      </MySkillCover>
    </MySkillsWrapper>
  );
};

export default MySkills;
