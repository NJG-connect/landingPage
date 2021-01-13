import React from 'react';
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

  function createMarkup(data: string) {
    return { __html: `<p>${data}</p>` };
  }


  return (
    <div className={styles.flipCard}>
      <div className={styles.flipCardInner}>
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