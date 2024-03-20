import { HeaderWrapper, Logo, Links, MyButton, Action } from "./Header.styled";
import { HashLink as Link } from "react-router-hash-link";
import { Github, Instagram, List } from "react-bootstrap-icons";
import { useState } from "react";
import HeaderSlider from "./HeaderSlider";

const Header = () => {
  const [closeMenu, setCloseMenu] = useState(true);
  const [display, setDisplay] = useState("block");

  return (
    <HeaderWrapper>
      <Logo>
        <Link to="/">Siya</Link>
      </Logo>
      <Links>
        <Link to={"#about"}>Home</Link>
        <Link to={"#projects"}>About</Link>
        <Link to={"#skills"}>Projects</Link>
        <Link to={"#contacts"}>Contact</Link>
      </Links>
      <Action>
        <Link to={"https://github.com/siyabongasamkelo"} target={`_blank`}>
          <Github className="alldevices" />
        </Link>
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
