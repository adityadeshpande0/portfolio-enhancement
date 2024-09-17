import branchIcon from "../../assets/icons/branch_icon_footer.svg";
import crossIcon from "../../assets/icons/cross_icon_footer.svg";
import alertIcon from "../../assets/icons/alert_icon_footer.svg";
import bellIcon from "../../assets/icons/bell_icon_footer.svg";

const Footer: React.FC = () => {
  return (
    <div className="d-flex justify-content-between align-items-center bg-primary">
      <div className="d-flex align-items-center">
        <div className="d-flex align-items-center me-4 p-2 hover-bg-secondary">
          <img alt="branch" src={branchIcon} className="me-2" />
          <a
            href="https://github.com/adityadeshpande0/MyPortfolio"
            className="text-white text-decoration-none"
          >
            main
          </a>
        </div>
        <div className="d-flex align-items-center p-2 hover-bg-secondary">
          <img alt="cross" src={crossIcon} className="me-2" />
          <p className="text-white mb-0 me-4">0</p>
          <img alt="alert" src={alertIcon} className="me-2" />
          <p className="text-white mb-0">0</p>
        </div>
      </div>
      <div className="d-flex align-items-center p-2">
        <p className="text-white mb-0 me-4">Made in React JS</p>
        <img alt="bell" src={bellIcon} />
      </div>
    </div>
  );
};

export default Footer;
