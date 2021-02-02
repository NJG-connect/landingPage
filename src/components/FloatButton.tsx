import React, { useContext } from 'react';
import images from '../assets/images';
import { ToastContext } from '../contexts/ToastContext';
import styles from './FloatButton.module.css';

interface Props {
  initalValue?: boolean;
}

function FloatButton({ initalValue }: Props) {
  const { show } = useContext(ToastContext);
  const handleMoveToContact = () => {
    if (!initalValue) {
      document.getElementById('contact')!.scrollIntoView({ behavior: 'smooth' });
    } else {
      show({ message: 'Votre message a déjà été transmis' });
    }

  }

  return (
    <div className={styles.bubble} onClick={() => handleMoveToContact()}>
      <img src={initalValue ? images.mailSend : images.mail} alt="mail" className={styles.image} />
    </div>
  )
}

export default FloatButton