import React, { SetStateAction, useState } from "react";
import FileUpload from "./FileUpload";
import { Dispatch } from "@reduxjs/toolkit";

type props = {
  uploadImage: any;
  submitHandler: () => void;
};

const UploadBox = (props: props) => {
  const { uploadImage, submitHandler } = props;
  const [btnDisabled, setBtnDisabled] = useState(true);

  const imageChangeHandler = (image: File) => {
    uploadImage(image);
    setBtnDisabled(false);
  };

  const onClickHandler = () => {
    submitHandler();
    setBtnDisabled(true);
  };

  return (
    <div className="d-flex flex-column gap-2">
      <h3>Upload your car image</h3>
      <p>Upload an image (up to 5MB) and we'll decode the plate number.</p>
      <FileUpload setUploadedImage={imageChangeHandler} />
      <button className="uploadBtn" onClick={onClickHandler} disabled={btnDisabled}>
        Continue
      </button>
    </div>
  );
};

export default UploadBox;
