import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import { useRef } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right = "0px";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  return (
    <div className="navbar">
      <style>{`.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 170px;
}
.nav-menu {
  display: flex;
  align-items: center;
  list-style: none;
  gap: 60px;
  font-size: 15px;
}
.nav-connect {
  padding: 20px 40px;
  border-radius: 50px;
  background: linear-gradient(267deg, #da7c25 0.36%, #b923e1 102.06%);
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s;
}
.nav-connect:hover {
  transform: scale(1.05);
}
.nav-menu li {
  display: flex;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}
.nav-menu li img {
  display: flex;
  margin: auto;
}
.anchor-link {
  text-decoration: none;
  color: white;
}
.nav-mob-open {
  display: none;
}
.nav-mob-close {
  display: none;
}
@media (max-width: 768px) {
  .navbar {
    margin: 20px 50px;
  }
  .nav-connect {
    display: none;
  }
  .nav-mob-open {
    display: block;
    position: fixed;
    right: 30px;
  }
  .nav-mob-close {
    display: block;
    position: relative;
    top: 30px;
    left: 290px;
    width: 30px;
  }
  .nav-menu {
    position: fixed;
    flex-direction: column;
    align-items: start;
    top: 0;
    gap: 30px;
    background-color: #5a2d04;
    width: 350px;
    height: 100%;
    z-index: 2;
    transition: 0.2s;
    right: -350px;
  }
  .nav-menu li {
    font-size: 25px;
    padding-left: 100px;
    flex-direction: row;
    gap: 20px;
  }
}
`}</style>
      <img src={logo} alt="" />
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
        />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </AnchorLink>
          {menu === "work" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={underline} alt="" /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
