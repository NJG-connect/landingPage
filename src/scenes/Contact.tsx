import React, { useContext, useState } from "react";
import sendEmail from "../api/sendEmail";
import images from "../assets/images";
import { TextInput } from "../components";
import { ToastContext } from "../contexts/ToastContext";
import styles from "./Contact.module.css";
import ReactGA from "react-ga";

interface Props {
  sendEmail: () => void;
  mailHasSent: boolean;
}

const contactNumber = "07 56 99 74 93";

const initialUserValue = {
  name: undefined,
  society: undefined,
  contact: undefined,
};

function Contact(props: Props) {
  const { show } = useContext(ToastContext);
  const [infoUser, setInfoUser] = useState<{
    name?: string;
    society?: string;
    contact?: string;
  }>(initialUserValue);

  const handleSendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      Object.entries(infoUser).every(
        ([key, value]) => !!value || key === "society"
      ) &&
      !props.mailHasSent
    ) {
      setInfoUser(initialUserValue);
      await sendEmail(infoUser);
      props.sendEmail();

      // GOOGLE ANALYTICS
      ReactGA.event({ category: "send", action: "send email" });

      show({ message: "l'email a bien été envoyé" });
      return false;
    } else {
      // GOOGLE ANALYTICS
      ReactGA.event({
        category: "send",
        action: "want send mail before the deadline",
      });

      show({ message: "Votre message a déjà été transmis" });
    }
  };

  return (
    <div id="contact" className={styles.contact}>
      <div id={styles.container}>
        <h2 className={styles.title}>
          …alors ne perdons pas de temps entrons en contact !
        </h2>
        <div className={styles.content}>
          <div className={styles.leftContent}>
            <img
              src={images.phoneCall}
              className={styles.phoneCallImage}
              alt="phoneCall"
            />
            <p className={styles.phoneCallText}>{contactNumber}</p>
          </div>
          <div className={styles.separator}>
            <p className={styles.separatorText}>ou</p>
          </div>
          <div className={styles.rightContent}>
            <form
              method="post"
              onSubmit={(e) => handleSendEmail(e)}
              className={styles.form}
            >
              <TextInput
                value={infoUser.name}
                onChange={(name: string) => setInfoUser({ ...infoUser, name })}
                label="Nom"
                required
              />
              <TextInput
                value={infoUser.society}
                onChange={(society: string) =>
                  setInfoUser({ ...infoUser, society })
                }
                label="Société"
              />
              <TextInput
                required
                value={infoUser.contact}
                onChange={(contact: string) =>
                  setInfoUser({ ...infoUser, contact })
                }
                label="Mail / Tel"
              />
              <button type="submit" className={styles.button}>
                <p>Entrer en contact</p>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
