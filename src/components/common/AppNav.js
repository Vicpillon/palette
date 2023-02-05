import React from 'react';
import './styles/appheader.css'

const Nav = () =>{
    return (
      <div>
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="/category" className="navbar-link">
                Category
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">
                Users
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">
                Login
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">
                Join
              </a>
            </li>
          </ul>
        </nav>
        ;
      </div>
    );
};

export default Nav;
