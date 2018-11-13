import React from "react";
import "./NavBar.less";
export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <div className="nav-logo">Logo</div>
        <div className="title">Many Hands</div>
      </div>
      <div className="open-studios">
        <div>Open Studios</div>
      </div>
      <div className="nav-container">
        <ul className="nav-items">
          <li>About</li>
          <li>Location</li>
          <li>Events</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}
