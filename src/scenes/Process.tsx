import React, { useEffect, useState } from 'react';
import styles from './Process.module.css';
import { ReactComponent as ProcessMobile } from '../assets/images/processMobile.svg';
import { ReactComponent as ProcessTablet } from '../assets/images/processTablet.svg';
import { ReactComponent as ProcessWeb } from '../assets/images/processWeb.svg';

function Process() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function reportWindowSize() {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', reportWindowSize)
    return () => window.removeEventListener('resize', reportWindowSize)
  }, [])

  const ProcessSVG = () => {
    if (windowWidth >= 1150) {
      return <ProcessWeb />;
    }
    else if (windowWidth <= 680) {
      return <ProcessMobile />;
    }
    return <ProcessTablet />
  }

  return (
    <div id={styles.services} >
      <div id={styles.container}>
        <p className={styles.subtitle} >Notre savoir faire à votre service</p>
        <div className={styles.content}>
          <ProcessSVG />
        </div>
      </div >
    </div >
  );
}

export default Process;