import React from "react";
import useStorage from "../hooks/useStorage";
// import "./ProgressBar.css";

const ProgressBar = ({ title, file, setFile, setFormValid }) => {
  const { url, progress } = useStorage(title, file);
  console.log(progress, url);
  React.useEffect(() => {
    if (url) {
      setFile(null);
      setFormValid(false);
    }
  }, [url, setFile, setFormValid]);
  return (
    <>
      <div className="progress-bar" style={{ width: progress + "%", height: "5px", backgroundColor:"blue", marginTop:"20px" }}></div>
      <br />
    </>
  );
};

export default ProgressBar;