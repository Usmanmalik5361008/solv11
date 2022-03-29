import React from "react";

import { QONCERTO_LOGO } from "assets";
import "./index.scss";

const Footer = () => {
  return (
    <footer>
      <img src={QONCERTO_LOGO} alt="" />
      <p>Powered by Qognitiv Technologie</p>
    </footer>
  );
};

export default Footer;
