import React, { useEffect, useState } from "react";

import UploadBox from "./UploadBox/UploadBox";
import PreviewBox from "./PreviewBox";
import ResultBox from "./ResultBox";
import "react-circular-progressbar/dist/styles.css";
import "./LprTest.css";

const LprTest = () => {
  const [result, setResult] = useState<ILprTestRes>(defaultResult);
  const [uploadedImage, setUploadedImage] = useState<File>();

  return (
    <div className="testOurApi_wrapper">
      <UploadBox updateResult={setResult} updateImage={setUploadedImage} />
      <PreviewBox result={result} uploadedImage={uploadedImage} />
      <ResultBox result={result} />
    </div>
  );
};

export default LprTest;

const defaultResult: ILprTestRes = {
  data: [
    {
      confidence: 62.63333333333334,
      plate_image: "ALPR_46eb20240318071000_plate_62.63_288ATG.jpg",
      plate_number: "S A M P L E",
    },
  ],
  full_image: "ALPR_46eb20240318071000_plate_62.63_288ATG_full.jpg",
  status: null,
  success: null,
};