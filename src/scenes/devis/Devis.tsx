import React, { lazy, useState } from "react";
import { OptionDevisType } from "../../types/Devis";
import styles from "./Devis.module.css";
import SelectProjectDevis from "./SelectProjectDevis";
import ContactDevis from "./ContactDevis";

const HeaderDevis = lazy(() => import("./HeaderDevis"));
const SelectOptionDevis = lazy(() => import("./SelectOptionDevis"));
interface Props {
  onClose: () => void;
}
export interface AnswersType {
  project: string[];
  support: string[];
  moreDescription: string;
  deadline: string;
  budget: string;
}

const initialAnswers: AnswersType = {
  project: [],
  support: [],
  moreDescription: "",
  deadline: "",
  budget: "30",
};

export interface ContactDevisType {
  name: string;
  society: string;
  tel: string;
  mail: string;
}

const initalContact: ContactDevisType = {
  name: "",
  society: "",
  tel: "",
  mail: "",
};

function Devis({ onClose }: Props) {
  const [step, setstep] = useState(0);
  const [optionDevisSelected, setoptionDevisSelected] = useState<
    OptionDevisType[]
  >([]);
  const [projectDevisSelected, setprojectDevisSelected] = useState<AnswersType>(
    initialAnswers
  );
  const [contactDevis, setcontactDevis] = useState<ContactDevisType>(
    initalContact
  );

  function selectOption(value: OptionDevisType[]) {
    setoptionDevisSelected(value);
    setstep(step + 1);
  }
  function selectProject(value: AnswersType) {
    setprojectDevisSelected(value);
    setstep(step + 1);
  }
  function handleSubmit(value: ContactDevisType) {
    setcontactDevis(value);
    onClose();
  }

  return (
    <div className={styles.devis} id="devis">
      <div className={styles.content}>
        <HeaderDevis
          onClose={onClose}
          step={step}
          moveStep={setstep}
          seeTimeline={!!step}
        />
        {step === 0 && (
          <SelectOptionDevis
            onSubmit={selectOption}
            initialValue={optionDevisSelected}
          />
        )}
        {step === 1 && (
          <SelectProjectDevis
            onSubmit={selectProject}
            optionDevisSelected={optionDevisSelected}
            initialValue={projectDevisSelected}
          />
        )}
        {step === 2 && (
          <ContactDevis onSubmit={handleSubmit} initialValue={contactDevis} />
        )}
      </div>
    </div>
  );
}

export default Devis;
