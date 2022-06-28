import React from "react";
import logo from "../assets/images/logo.svg";

export default function Header() {
  return (
    <header>
      <div className="header-inner">
        <img src={logo} alt="hatom-logo" />
        <ul>
          <li>Markets</li>
          <li>Governance</li>
          <li>Prices</li>
          <li>Docs</li>
          <li>Hatom Token</li>
        </ul>
        <div className="button-container">
          <button>Elrond</button>
          <button>App</button>
        </div>
      </div>
    </header>
  );
}
