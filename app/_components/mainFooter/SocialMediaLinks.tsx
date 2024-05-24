import React from "react";
import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa6";

const SocialMediaLinks = () => {
  return (
    <div className="socialIcon_list">
      <a href="https://www.facebook.com" target="_blank" className="socialIcon">
        <FaFacebook />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        className="socialIcon"
      >
        <AiFillInstagram />
      </a>
      <a href="https://www.x.com" target="_blank" className="socialIcon">
        <FaTwitter />
      </a>
      <a
        href="https://wa.me/+201101005678"
        target="_blank"
        className="socialIcon"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
