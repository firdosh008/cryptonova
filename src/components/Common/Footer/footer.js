import React from "react";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="footer">
      <h2 className="logo" onClick={() => topFunction()}>
        CryptoNova<span>.</span>
      </h2>
      <div className="social-links">
        <a href="mailto:ahmadfirdosh008@gmail.com">
          <EmailIcon className="social-link" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
