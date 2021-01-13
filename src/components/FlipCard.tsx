import React, { useState } from 'react';
import images, { ImageType } from '../assets/images';
import styles from './FlipCard.module.css';

interface Props {
  data: {
    title: string;
    description: string;
    logo: string;
    subDescription: string;
  }
}

function FlipCard({ data }: Props) {
  const [isActive, setisActive] = useState(false);

  function createMarkup(data: string) {
    return { __html: `<p>${data}</p>` };
  }

  function handleClick() {
    setisActive(!isActive);
  }

  return (
    <div className={styles.flipCard} onClick={() => handleClick()}>
      <div className={`${styles.flipCardInner} ${isActive && styles.flipCardHover}`}>
        <div className={styles.flipCardFront}>
          <p className={styles.title}>{data.title}</p>
          <div dangerouslySetInnerHTML={createMarkup(data.description)} className={styles.description} />
          {
            data.logo && <img src={images[data.logo as ImageType]} alt='solution' className={styles.image} />
          }
        </div>
        <div className={styles.flipCardBack}>
          <div dangerouslySetInnerHTML={createMarkup(data.subDescription)} className={styles.description} />
        </div>
        <div className={styles.viewPager}>
          <div className={styles.boundBlue} />
          <div className={styles.boundWhite} />
        </div>
      </div>
    </div>

  )
}

export default FlipCard