import { HeaderWrapper, Logo, Links, MyButton, Action } from "./Header.styled";
import { Link } from "react-router-dom";
import { List } from "react-bootstrap-icons";
const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>Siya</Logo>
      <Links>
        <Link to={"/"}>Home</Link>
        <Link to={"/"}>Projects</Link>
        <Link to={"/"}>Contact</Link>
        <MyButton>My Projects</MyButton>
      </Links>
      <Action>
        <MyButton>My Projects</MyButton>
        <List />
      </Action>
    </HeaderWrapper>
  );
};

export default Header;
