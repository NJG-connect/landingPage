import React, { lazy, useState } from 'react';
import { OptionDevisType } from '../../types/Devis';
import styles from './Devis.module.css';

const HeaderDevis = lazy(() => import('./HeaderDevis'));
const SelectOptionDevis = lazy(() => import('./SelectOptionDevis'));


interface Props {
  onClose: () => void;
}

function Devis({ onClose }: Props) {
  const [step, setstep] = useState(0);
  const [optionDevisSelected, setoptionDevisSelected] = useState<OptionDevisType[]>([]);

  function selectOption(value: OptionDevisType[]) {
    setoptionDevisSelected(value);
    setstep(step + 1)
  }

  return (
    <div className={styles.devis} id="devis">
      <HeaderDevis onClose={onClose} step={step} moveStep={setstep} seeTimeline={!!step} />
      { step === 0 && <SelectOptionDevis onSubmit={selectOption} />}
      { step === 1 && <SelectOptionDevis onSubmit={selectOption} />}
    </div>
  );
}

export default Devis;
