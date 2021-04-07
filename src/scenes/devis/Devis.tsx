import React, { lazy, useEffect, useState } from "react";
import { OptionDevisType } from "../../types/Devis";
import styles from "./Devis.module.css";
import SelectProjectDevis from "./SelectProjectDevis";
import ContactDevis from "./ContactDevis";
import sendEmail from "../../api/sendEmail";

const HeaderDevis = lazy(() => import("./HeaderDevis"));
const SelectOptionDevis = lazy(() => import("./SelectOptionDevis"));
interface Props {
  onClose: () => void;
  sendEmail: () => void;
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

function Devis({ onClose, sendEmail: sendEmailProps }: Props) {
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
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    import("../../utils/reactAnalytics").then(({ createEventGA }) => {
      createEventGA({
        category: "access",
        action: "Access devis",
      });
    });
  }, []);

  function selectOption(value: OptionDevisType[]) {
    setoptionDevisSelected(value);
    setstep(step + 1);
  }
  function selectProject(value: AnswersType) {
    setprojectDevisSelected(value);
    setstep(step + 1);
  }
  async function handleSubmit(value: ContactDevisType) {
    setIsSending(true);
    setcontactDevis(value);
    const newUserInfo = {
      ...projectDevisSelected,
      ...value,
      type: optionDevisSelected,
    };
    // GOOGLE ANALYTICS
    import("../../utils/reactAnalytics").then(({ createEventGA }) => {
      createEventGA({
        category: "access",
        action: "send devis",
      });
    });
    await sendEmail(newUserInfo, "devis");

    // CREATE TIMESTAMP SEND EMAIL
    sendEmailProps();
    const timer = setTimeout(() => {
      setIsSending(false);
      onClose();
    }, 2000);
    return () => clearTimeout(timer);
  }

  return (
    <div className={styles.devis} id="devis">
      <div
        className={`${styles.content} ${
          step !== 0 ? styles.contentForOptionDevis : ""
        } `}
      >
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
          <ContactDevis
            onSubmit={handleSubmit}
            initialValue={contactDevis}
            isSending={isSending}
          />
        )}
      </div>
    </div>
  );
}

export default Devis;
