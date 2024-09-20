import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../screens/Home/Home";
import Navbar from "../components/topnavbar/TopNavbar";
import Footer from "../components/footer/Footer";
import Projects from "../screens/Projects/Projects";
import Sidepanel from "../components/sidepanel/Sidepanel";
import "bootstrap/dist/css/bootstrap.min.css";
import SideNavbar from "../components/sidenavbar/SideNavbar";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className="d-flex flex-grow-1">
          <SideNavbar />
          <Sidepanel />
          <div className="container-fluid p-3">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;
