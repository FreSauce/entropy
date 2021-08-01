import React from "react";
import useStorage from "../hooks/useStorage";
import { customAlphabet } from 'nanoid'
const nanoid = customAlphabet('0123456789', 10)

const ProgressBar = ({ title, file, setFile, setFormValid }) => {

  const changeName = (file) => {
    const myRenamedFile = new File([file], nanoid());
    return myRenamedFile;
  }


  const { url, progress } = useStorage(title, changeName(file));
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