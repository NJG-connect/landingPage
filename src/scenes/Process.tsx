import React, { useEffect, useState } from 'react';
import styles from './Process.module.css';
import images from '../assets/images';

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
      return <img src={images.processWeb} alt="process" />
    }
    else if (windowWidth <= 680) {
      return <img src={images.processMobile} alt="process" />
    }
    return <img src={images.processTablet} alt="process" />
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