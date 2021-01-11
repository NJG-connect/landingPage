import React from 'react';
import images from '../assets/images';
import './Header.css';

function Header() {
  return (
    <div id="header">
      <div id="container">
        <img src={images.circle} className="circle" alt="Logo" />
        <img src={images.tiles} className="tiles" alt="Logo" />
        <div className="firstContent">
          <img src={images.logo} className="logoImage" alt="Logo" />
        </div>
        <div>
          <p className="subtile">L'AGENCE DIGITALE QUI</p>
          <p className="subtile">RÉPOND À VOS BESOINS</p>
        </div>
        <div className="thirdContent">
          <img src={images.mobile} className="platformImageMobile" alt="mobile" />
          <div>
            <p className="text">Android</p>
            <p className="text">IOS</p>
          </div>
          <div className="separator" />
          <p className="text">WEB</p>
          <img src={images.web} className="platformImageWeb" alt="web" />
        </div>
      </div>
      <div className="waveView">
        <div className="scroll-down" />
        <img src={images.waveTop} className="waveImage" alt="wave" />
        <div className="waveBackground" />
      </div>
    </div >
  );
}

export default Header;
