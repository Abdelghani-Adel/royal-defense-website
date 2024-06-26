import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  image: string;
  text: string;
  urlTarget: string;
  btnTitle?: string;
  targetBlank?: boolean;
};

const MyCard = (props: Props) => {
  const { title, image, text, btnTitle, urlTarget, targetBlank } = props;

  return (
    <div className="myCard">
      <div className="myCard_details">
        <div className="myCard_img">
          <Image src={image} fill alt="" />
        </div>
        <p className="myCard_text-title">{title}</p>
        <p className="myCard_text-body">{text}</p>
      </div>
      <button className="myCard_button">
        <Link href={urlTarget} target={targetBlank ? "_blank" : "_self"}>
          {btnTitle ? btnTitle : "More Info"}
        </Link>
      </button>
    </div>
  );
};

export default MyCard;
