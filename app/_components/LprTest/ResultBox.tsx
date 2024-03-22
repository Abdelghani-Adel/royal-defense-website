import Image from "next/image";
import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import ResultDetection from "./ResultDetection";
import { v4 } from "uuid";

type Props = {
  result: ILprTestRes;
};

const ResultBox = (props: Props) => {
  const { result } = props;
  const fullImage = result.full_image;
  const detections = result.data;

  return (
    <div className="resultBox">
      <h2>LPR Results</h2>

      {detections != null &&
        detections.length > 0 &&
        detections.map((detect) => (
          <ResultDetection key={v4()} detect={detect} />
        ))}
    </div>
  );
};

export default ResultBox;
