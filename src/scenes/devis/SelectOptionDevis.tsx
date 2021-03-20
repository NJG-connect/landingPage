import React, { lazy, useState } from 'react';
import devisService, { OptionDevisType } from '../../types/Devis';
import styles from './SelectOptionDevis.module.css';
interface Props {
  onSubmit: (value: OptionDevisType[]) => void;
}

const CardSelectOption = lazy(() => import('../../components/CardSelectOption'));

const initialValue: { [key in OptionDevisType]: boolean } = {
  [OptionDevisType.dev]: false,
  [OptionDevisType.design]: false,
  [OptionDevisType.conseil]: false,
}

function SelectOptionDevis({ onSubmit }: Props) {
  const [select, setSelect] = useState<{ [key in OptionDevisType]: boolean }>(initialValue);
  function handleSubmit() {
    const value: OptionDevisType[] = Object.keys(select).filter((el) => select[el as OptionDevisType] === true) as OptionDevisType[];
    onSubmit(value);
  }

  return (
    <div className={styles.selectOptionDevis}>
      <p className={styles.title}>Services souhaités :</p>
      <div className={styles.content}>
        <CardSelectOption info={devisService.design} selected={select.design} onClick={() => setSelect({ ...select, design: !select.design })} />
        <CardSelectOption info={devisService.dev} selected={select.dev} onClick={() => setSelect({ ...select, dev: !select.dev })} />
        <CardSelectOption info={devisService.conseil} selected={select.conseil} onClick={() => setSelect({ ...select, conseil: !select.conseil })} />
      </div>
      <div className={styles.submit}>
        <div onClick={handleSubmit} className={styles.button} >
          <p>Compléter mes services</p>
        </div>
      </div>
    </div>
  );
}

export default SelectOptionDevis;