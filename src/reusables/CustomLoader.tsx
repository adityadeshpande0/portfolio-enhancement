import React from "react";
import "./Loader.scss";

interface LoaderProps {
  text: string;
}

const CustomLoader: React.FC<LoaderProps> = ({ text }) => {
  return (
    <div className="loader d-flex justify-content-center align-items-center vh-100">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <p className="mt-3">{text}</p>
    </div>
  );
};

export default CustomLoader;
