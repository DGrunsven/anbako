import React from "react";
import "./Footer.css";
import logo from "./Images/logoFooter.png";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <img src={logo} alt="Logo Anbako" className="logo-Anbako-footer" />
        <div className="footer-text-adres">
          <p>Vlierdenseweg 169</p>
          <p>5756 AA Vlierden</p>
          <p>KvK nummer: 88869342</p>
        </div>
        <div className="footer-names-tel">
          <a classname="footer-text" href="tel:0646438073">
            Herman: 06 46438073
          </a>
          <p>&nbsp;&nbsp;|&nbsp;&nbsp;</p>
          <a classname="footer-text" href="mailto: herman@anbako.nl">
            herman@anbako.nl
          </a>
        </div>
        <div className="footer-names-tel">
          <a classname="footer-text" href="tel:0631907197">
            Anne: 06 31907197
          </a>
          <p>&nbsp;&nbsp;|&nbsp;&nbsp;</p>
          <a classname="footer-text" href="mailto: anne@anbako.nl">
            anne@anbako.nl
          </a>
        </div>
      </section>
      <section class="social-media">
        <div class="social-media-wrap">
          <a
            href="https://www.linkedin.com/in/donna-van-grunsven/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-logo"
          >
            Door Donna Janssen
          </a>
          <div classname="copyright">Anbako © 2023</div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
