import React from 'react';
import images from '../assets/images';
import styles from './FloatButton.module.css';



function FloatButton() {
  const handleMoveToContact = () => {
    document.getElementById('contact')!.scrollIntoView();
  }

  return (
    <div className={styles.bubble} onClick={() => handleMoveToContact()}>
      <img src={images.mail} alt="mail" className={styles.image} />
    </div>
  )
}

export default FloatButton