import React from "react";
import { RiLoader3Fill } from "react-icons/ri";

type props = {
  buttonState: string;
};

const SubmitBtn = (props: props) => {
  return (
    <button type="submit" className={`uploadBtn ${props.buttonState}`}>
      {props.buttonState === "idle" ? (
        "Continue"
      ) : (
        <>
          <RiLoader3Fill className="loadingIcon" />
          <span>Loading...</span>
        </>
      )}
    </button>
  );
};

export default SubmitBtn;
