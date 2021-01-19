import React, { useEffect, useMemo, useState } from 'react';
import images from '../assets/images';
import styles from './Process.module.css';

function Process() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function reportWindowSize() {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', reportWindowSize)
    return () => window.removeEventListener('resize', reportWindowSize)
  }, [])

  const processImg = useMemo(() => {
    if (windowWidth >= 1150) {
      return images.processWeb;
    }
    else if (windowWidth <= 680) {
      return images.processMobile;
    }
    else {
      return images.processTablet
    }
  }, [windowWidth])



  return (
    <div id={styles.services} >
      <div id={styles.container}>
        <h2 className={styles.title} >NOTRE PROCESSUS</h2>
        <div className={styles.content}>
          <img src={processImg} alt="process" className={styles.image} />
        </div>
      </div >
    </div >
  );
}

export default Process;
