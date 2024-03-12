import { HeaderWrapper, Logo, Links, MyButton } from "./Header.styled";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>Siya</Logo>
      <Links>
        <Link to={"/"}>Home</Link>
        <Link to={"/"}>Home</Link>
        <Link to={"/"}>Home</Link>
        <Link to={"/"}>Home</Link>
      </Links>
      <MyButton>My Projects</MyButton>
    </HeaderWrapper>
  );
};

export default Header;
