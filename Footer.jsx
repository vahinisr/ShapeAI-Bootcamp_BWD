import React from "react";

function Footer() {
  var currenr_year = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright @ {currenr_year}</p>
    </footer>
  );
}

export default Footer;
