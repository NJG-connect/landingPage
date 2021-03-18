import React, { lazy, useState } from 'react';
import { ImageDevisType } from '../../assets/images/devis';
import styles from './SelectOptionDevis.module.css';

interface Props {
  onSubmit: () => void;
}


interface DevisServiceType {
  dev: {
    title: string;
    description: string;
    images: ImageDevisType[];
  }
  design: {
    title: string;
    description: string;
    images: ImageDevisType[];
  }
  conseil: {
    title: string;
    description: string;
    images: ImageDevisType[];
  }
}

const CardSelectOption = lazy(() => import('../../components/CardSelectOption'));
const devisService: DevisServiceType = {
  dev: {
    title: "Developpement",
    description: "Application (Android/Apple), Système de facturation en ligne, Intranet, ERP, CRM",
    images: ['paint', 'flyer', 'carteDeVisite']
  },
  design: {
    title: "Graphisme",
    description: "Images, Charte graphique, documents prints (flyers/Carte de visite), logo...",
    images: ['tel', 'code', 'screen']
  },
  conseil: {
    title: "Conseils / Expertises",
    description: "Laissez nous faire, on s'occupe de tout !",
    images: ['synthese', 'erp', 'graph']
  },
}

const initialValue = {
  dev: false,
  design: false,
  conseil: false,
}

function SelectOptionDevis({ onSubmit }: Props) {
  const [select, setSelect] = useState(initialValue);
  return (
    <div className={styles.selectOptionDevis}>
      <p className={styles.title}>Services souhaités :</p>
      <div className={styles.content}>
        <CardSelectOption info={devisService.design} selected={select.design} onClick={() => setSelect({ ...select, design: !select.design })} />
        <CardSelectOption info={devisService.dev} selected={select.dev} onClick={() => setSelect({ ...select, dev: !select.dev })} />
        <CardSelectOption info={devisService.conseil} selected={select.conseil} onClick={() => setSelect({ ...select, conseil: !select.conseil })} />
      </div>
      <div className={styles.submit}>
        <div onClick={() => onSubmit()} className={styles.button} >
          <p>Compléter mes services</p>
        </div>
      </div>
    </div>
  );
}

export default SelectOptionDevis;