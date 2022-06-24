import React from "react";
import logo from "../assets/images/logo.svg";

export default function Header() {
  return (
    <header>
      <div className="header-inner">
        <img src={logo} alt="hatom-logo" />
      </div>
    </header>
  );
}
