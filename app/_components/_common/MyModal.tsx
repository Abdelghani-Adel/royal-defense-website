import React, { useEffect, useRef } from "react";

const MyModal = (props: Props) => {
  return (
    <div className={`myModal ${props.show ? "active" : ""}`}>
      <div className="myModal_content">{props.children}</div>
      <div className="myModal_backdrop" onClick={props.onClose} />
    </div>
  );
};

export default MyModal;

type Props = {
  show: boolean;
  children: React.ReactNode;
  onClose: () => void;
};
