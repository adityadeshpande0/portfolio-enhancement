import {
  FileCopyOutlined as FileCopyOutlinedIcon,
  Settings,
  AccountCircleOutlined,
  GitHub,
  Create,
  Code,
  Email,
} from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import './sidenavbar-styles.scss'

const SideNavbar: React.FC = () => {
  const [isIconClicked, setIsIconClicked] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setIsIconClicked(index);
  };

  const icons = [
    { Icon: FileCopyOutlinedIcon, index: 0, path: "/" },
    { Icon: GitHub, index: 1, path: "/github" },
    { Icon: Code, index: 2, path: "/projects" },
    { Icon: Create, index: 3, path: "/blogs" },
    { Icon: Email, index: 4, path: "/contact" },
  ];

  return (
    <div
      className="d-flex flex-column justify-content-between align-items-center vh-100 bg-dark"
      style={{ width: "3rem" }}
    >
      <div className="d-flex flex-column align-items-center">
        {icons.map(({ Icon, index, path }) => (
          <Link to={path} key={index} onClick={() => handleClick(index)}>
            <Icon
              className={`icon-appbar ${
                isIconClicked === index ? "clicked" : ""
              } text-secondary`}
              style={{ fontSize: "1.5rem", margin: "10px", cursor: "pointer" }}
            />
          </Link>
        ))}
      </div>
      <div className="d-flex flex-column align-items-center">
        <Link to="/about" onClick={() => handleClick(5)}>
          <AccountCircleOutlined
            className={`icon-appbar ${
              isIconClicked === 5 ? "clicked" : ""
            } text-secondary`}
            style={{ fontSize: "1.5rem", margin: "10px", cursor: "pointer" }}
          />
        </Link>
        <Link to="/settings" onClick={() => handleClick(6)}>
          <Settings
            className={`icon-appbar ${
              isIconClicked === 6 ? "clicked" : ""
            } text-secondary`}
            style={{ fontSize: "1.5rem", margin: "10px", cursor: "pointer" }}
          />
        </Link>
      </div>
    </div>
  );
};

export default SideNavbar;
