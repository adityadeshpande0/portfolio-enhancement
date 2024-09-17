import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import './alertdialog-styles.scss'
const AlertDialog: React.FC = () => {
  return (
    <div className="main-block-alert">
      <div className="top-block-alert">
        <InfoOutlinedIcon className="logo-alert" />
        <p className="top-text-alert">are you a recruiter ?</p>
      </div>
      <div className="bottom-block-alert">
        <p className="bottom-text-alert">download my resume</p>
        <div className="button-block-alert">
          <button className="button-alert">yes</button>
          <button className="button-alert">no</button>
        </div>
      </div>
    </div>
  );
};

export default AlertDialog;
