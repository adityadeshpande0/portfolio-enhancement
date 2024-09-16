import React from 'react';
import './topnav-styles.scss';

const TopNavbar: React.FC = () => {
  const navLinks = ["file", "edit", "view", "go", "run", "terminal", "help"];

  return (
    <div className="mainblock-navbar container-fluid">
      <div className="row align-items-center">
        <div className="col-auto">
          <img alt="vs-code" className="logo-navbar" />
        </div>
        <div className="col d-none d-md-flex">
          <div className="linkblock-navbar">
            {navLinks.map((link) => (
              <p key={link} className="linktext-navbar">{link}</p>
            ))}
          </div>
        </div>
        <div className="col text-center">
          <div className="titleblock-navbar">
            <p className="title-navbar">Aditya Deshpande - Portfolio</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
