import React, { useState } from 'react';

import './styles/appheader.css'
import DropDown from "./DropDown"

const Nav = () =>{
    const [drop, setDrop] = useState(false)
    return (
      <div>
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item"
              onClick={() => {
                setDrop(!drop);}}>
              <a>Category</a>
              {drop && <DropDown />}
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
      </div>
    );
};

export default Nav;
