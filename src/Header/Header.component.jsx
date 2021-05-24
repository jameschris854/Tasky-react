import React from "react";
import logo from "../logo.svg";
import './Header.styles.scss'

const Header = () => (
  <div className="header-container">
    <div className="logo-container">
      <img src={logo} alt="logo" />
    </div>
    <div className="header-elements">Tasky</div>
  </div>
);

export default Header;
