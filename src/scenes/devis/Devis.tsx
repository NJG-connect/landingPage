import React, { lazy, useState } from 'react';
import styles from './Devis.module.css';

const HeaderDevis = lazy(() => import('./HeaderDevis'));
const SelectOptionDevis = lazy(() => import('./SelectOptionDevis'));


interface Props {
  onClose: () => void;
}

function Devis({ onClose }: Props) {
  const [step, setstep] = useState(0);

  return (
    <div className={styles.devis} id="devis">
      <HeaderDevis onClose={onClose} step={step} moveStep={setstep} seeTimeline={!!step} />
      <SelectOptionDevis onSubmit={() => { }} />
    </div>
  );
}

export default Devis;
