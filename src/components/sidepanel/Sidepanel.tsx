import { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import reactIcon from "../../assets/icons/icon_react_sidepanel.svg";
import jsIcon from "../../assets/icons/icon_javascript_sidepanel.svg";
import htmlIcon from "../../assets/icons/icon_html_sidepanel.svg";
import cssIcon from "../../assets/icons/icon_css_sidepanel.svg";
import jsonIcon from "../../assets/icons/icon_json_sidepanel.svg";
import mdgitIcon from "../../assets/icons/icon_mdgit_sidepanel.svg";
import { Link } from "react-router-dom";

const Sidepanel: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const data = [
    { id: 1, routeLink: "", title: "home.jsx", imageURL: reactIcon },
    { id: 2, routeLink: "about", title: "about.html", imageURL: htmlIcon },
    { id: 3, routeLink: "projects", title: "projects.js", imageURL: jsIcon },
    { id: 4, routeLink: "contact", title: "contact.css", imageURL: cssIcon },
    { id: 5, routeLink: "blogs", title: "blogs.json", imageURL: jsonIcon },
    { id: 6, routeLink: "github", title: "github.md", imageURL: mdgitIcon },
  ];

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="bg-dark h-100 d-none d-md-block" style={{ width: "15rem" }}>
      <div className="d-flex justify-content-between align-items-center p-2">
        <p className="text-uppercase text-light mb-0">Explorer</p>
        <MoreHorizIcon
          className="text-light"
          style={{ cursor: "pointer" }}
        />
      </div>
      <div>
        <div
          className="d-flex align-items-center px-2 py-1"
          onClick={toggleCollapse}
          style={{ cursor: "pointer" }}
        >
          {isCollapsed ? (
            <KeyboardArrowDownIcon className="text-light" />
          ) : (
            <KeyboardArrowUpIcon className="text-light" />
          )}
          <p className="text-uppercase text-light mb-0 ms-2">Aditya's Portfolio</p>
        </div>
        {!isCollapsed &&
          data.map((item) => (
            <Link
              to={item.routeLink}
              key={item.id}
              className="text-decoration-none"
            >
              <div className="d-flex align-items-center py-2 hover-bg-dark px-3">
                <img
                  className="me-2"
                  src={item.imageURL}
                  alt={item.title}
                  style={{ width: "20px", height: "20px" }}
                />
                <p className="text-light mb-0">{item.title}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Sidepanel;
