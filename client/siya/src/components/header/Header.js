import { HeaderWrapper, Logo, Links, MyButton, Action } from "./Header.styled";
import { Link } from "react-router-dom";
import { Github, Instagram, List } from "react-bootstrap-icons";
import { useState } from "react";
import HeaderSlider from "./HeaderSlider";

const Header = () => {
  const [closeMenu, setCloseMenu] = useState(true);
  const [display, setDisplay] = useState("block");

  return (
    <HeaderWrapper>
      <Logo>Siya</Logo>
      <Links>
        <Link to={"/"}>Home</Link>
        <Link to={"/"}>About</Link>
        <Link to={"/"}>Projects</Link>
        <Link to={"/"}>Contact</Link>
      </Links>
      <Action>
        <Github className="alldevices" />
        <Instagram className="alldevices" />
        <MyButton>My Projects</MyButton>
        <List
          onClick={() => {
            closeMenu ? setDisplay("none") : setDisplay("block");
            setCloseMenu(false);
          }}
        />
      </Action>
      <HeaderSlider
        setCloseMenu={() => {
          setCloseMenu(true);
        }}
        closeMenu={closeMenu}
        display={display}
      ></HeaderSlider>
    </HeaderWrapper>
  );
};

export default Header;
