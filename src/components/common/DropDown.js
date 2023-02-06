import React from 'react';
import "./styles/dropdown.css"

const DropDown = () => {
  return (
    <div className="dropdown-container">
      <nav className="dropdown-nav">
        <ul className="dropdown-list">
          <li className="dropdown-item">
            <a href="/Floral" className="dropdown-link">
              Floral
            </a>
          </li>
          <li className="dropdown-item">
            <a href="/Woody" className="dropdown-link">
              Woody
            </a>
          </li>
          <li className="dropdown-item">
            <a href="/Cotton" className="dropdown-link">
              Cotton
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default DropDown;
