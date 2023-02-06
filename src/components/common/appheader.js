import React from "react";
import './styles/appheader.css'
// import { Link } from "react-router-dom"

const AppHeader = () => {
  return (
    <div className="mainLogo">
      <header className="header">
        <h1 className="logo">
          <a href="/">8lette</a>
        </h1>
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="/" className="navbar-link">
                main
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">
                login
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">
                장바구니
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
export default AppHeader;
