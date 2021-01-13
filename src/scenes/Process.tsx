import React, { useEffect, useState } from 'react';
import images from '../assets/images';
import { FlipCard } from '../components';
import styles from './Services.module.css';
import servicesJson from '../utils/services.json';
import { useTransition, animated } from 'react-spring'
import useVisibility from '../hooks/useVisibility';

function Process() {

  const [targetRef, visible] = useVisibility<HTMLDivElement, boolean>();
  const [isVisible, setVisible] = useState(false);
  useEffect(() => {
    if (isVisible === false) {
      if (visible) {
        setVisible(true);
      }
      return
    }
    return
  }, [isVisible, visible])


  const transitions = useTransition(isVisible ? servicesJson : [], (item) => item.title, {
    unique: true,
    trail: 350,
    from: { opacity: 0, transform: 'scale(0.9)', },
    enter: { opacity: 1, transform: 'scale(1)' },
  })

  return (
    <div id={styles.services} >
      <div id={styles.container}>
        <h2 className={styles.title}>NOS SERVICES</h2>
        <div className={isVisible ? styles.scrollContent : styles.scrollContentWait} ref={targetRef} >
          {transitions.map(({ item, key, props }) => (
            <animated.div className={styles.card} key={key} style={{ ...props }}>
              <FlipCard data={item} />
            </animated.div>
          ))}
        </div>
        <p className={styles.description}>En marche vers l'évolution digitale...</p>
      </div>
      <img src={images.waveBottom} className={styles.waveImage} alt="wave" />

    </div >
  );
}

export default Process;
