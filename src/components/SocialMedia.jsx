import React from "react";

import { SiGmail, SiInstagram } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const SocialMedia = (props) => {
  return (
    <div className="social-media">
      <a
        href="https://github.com/nestormonroy"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FiGithub className="custom" />
      </a>
      <a
        href="https://www.linkedin.com/in/nestormonroy_/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaLinkedinIn className="custom" />
      </a>
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=nestor.monroy.90@gmail.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <SiGmail className="custom" />
      </a>
    </div>
  );
};
export default SocialMedia;
