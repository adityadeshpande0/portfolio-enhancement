import React from "react";
import vscode from "../../assets/icons/vs-code-image.svg";
import "./topnav-styles.scss";

const TopNavbar: React.FC = () => {
  const navLinks = ["file", "edit", "view", "go", "run", "terminal", "help"];

  return (
    <div className="main-container container-fluid bg-dark">
      <div className="row align-items-center m-0">
        <div className="col-auto d-flex">
          <img src={vscode} alt="vs-code" className="logo-navbar" />
          {navLinks.map((link) => (
            <p key={link} className="navlinks mb-0 mx-2">
              {link}
            </p>
          ))}
        </div>
        <div className="col text-center">
          <p className="navbartext mb-0 text-light">
            Aditya Deshpande - Portfolio
          </p>
        </div>
        <div className="col-auto"></div>
      </div>
    </div>
  );
};

export default TopNavbar;
