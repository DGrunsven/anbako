import React from 'react';
import './Footer.css';
import logo from './anbako-mock-white.png';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
      <img src={logo} alt="Logo Anbako" className='logo-Anbako'/>

        <p className='footer-subscription-text'>
          Uw maat voor administratie!
        </p>
          <p>
          Vlierdenseweg 169
          </p>
          <p>
          5756 AA  Vlierden
          </p>
          <p>
          T: 06 46438073
          </p>
          <p>
          E: <a href = "mailto: h.janssen@anbako.nl" style="color: red">h.janssen@anbako.nl</a>
          </p>
      </section>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
              Door Donna Janssen
          </div>
          <div class='website-rights'>Ankbako © 2022</div>
        </div>
      </section>
    </div>
  );
}

export default Footer;