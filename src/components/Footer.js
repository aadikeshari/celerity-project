import React from "react";
import wave from "../assets/wave.svg";
import wave2 from "../assets/wave2.svg";

const Footer = () => {
  return (
    <div>
      <img src={wave} alt="" width="100%" className="absolute" />
      <img src={wave2} alt="" width="100%" />
    </div>
  );
};

export default Footer;
