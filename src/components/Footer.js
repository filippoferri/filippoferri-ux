import React from "react";

import { Link } from "gatsby";

const Footer = () => (
  <footer>
    <div className="ff-copy has-background-white">
      <div className="container is-widescreen has-text-centered">
        <span>2018 &copy; Filippo Ferri</span>
        <span>VAT IT02341330419</span>
        <Link to={"/legals"}>Legal notice</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
