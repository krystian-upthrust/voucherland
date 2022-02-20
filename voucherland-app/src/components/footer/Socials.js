import React from "react";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";

export default function Socials() {
  return (
    <div className="socials">
      <h3>Socials</h3>
      <div className="socials_content">
        <div className="socials_item">
          <FiFacebook />
        </div>
        <div className="socials_item">
          <FiInstagram />
        </div>
        <div className="socials_item">
          <FiLinkedin />
        </div>
      </div>
    </div>
  );
}
