import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { RxUpload } from "react-icons/rx";

type Props = {
  setUploadedImage: (files: File) => void;
};

const FileUpload = (props: Props) => {
  const { setUploadedImage } = props;

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setUploadedImage(acceptedFiles[0]);
    },
  });

  return (
    <div {...getRootProps()} className="dropZone">
      <input {...getInputProps()} />
      <RxUpload className="dropZone_icon" />
      <p>Select file</p>
    </div>
  );
};

export default FileUpload;
