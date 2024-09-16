import React from 'react';
import vscode from '../../assets/icons/vs-code-image.svg';

const TopNavbar: React.FC = () => {
  const navLinks = ["file", "edit", "view", "go", "run", "terminal", "help"];

  return (
    <div className="container-fluid bg-dark">
      <div className="row align-items-center">
        <div className="col-auto d-flex">
          <img src={vscode} alt="vs-code" className="logo-navbar" style={{ width: '20px', height: '20px', marginRight: '15px', marginLeft: '10px', cursor: 'pointer' }} />
          {navLinks.map((link) => (
            <p key={link} className="mb-0 text-light mx-2" style={{ cursor: 'pointer', fontSize: '13px' }}>{link}</p>
          ))}
        </div>
        <div className="col text-center">
          <p className="mb-0 text-light" style={{ fontSize: '13px' }}>Aditya Deshpande - Portfolio</p>
        </div>
        <div className="col-auto"></div>
      </div>
    </div>
  );
};

export default TopNavbar;
