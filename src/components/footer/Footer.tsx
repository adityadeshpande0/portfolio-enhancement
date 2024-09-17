import branchIcon from "../../assets/icons/branch_icon_footer.svg";
import crossIcon from "../../assets/icons/cross_icon_footer.svg";
import alertIcon from "../../assets/icons/alert_icon_footer.svg";
import bellIcon from "../../assets/icons/bell_icon_footer.svg";
import './footer-styles.scss'
const Footer: React.FC = () => {
  return (
    <div className="main-container-footer d-flex justify-content-between align-items-center bg-primary">
      <div className="d-flex align-items-center">
        <div className="branch-container d-flex align-items-center me-4 mx-2 hover-bg-secondary">
          <img alt="branch" src={branchIcon} className="me-2" />
          <a
            href="https://github.com/adityadeshpande0/MyPortfolio"
            className="footer-text text-white text-decoration-none"
          >
            main
          </a>
        </div>
        <div className="icons-container d-flex align-items-center hover-bg-secondary">
          <img alt="cross" src={crossIcon} className="me-2" />
          <p className="footer-text text-white mb-0 me-4">0</p>
          <img alt="alert" src={alertIcon} className="me-2" />
          <p className="footer-text text-white mb-0">0</p>
        </div>
      </div>
      <div className="end-container d-flex align-items-center">
        <p className="footer-text text-white mb-0 me-2">Made in React JS</p>
        <img alt="bell" src={bellIcon} />
      </div>
    </div>
  );
};

export default Footer;
