import React, { useState } from "react";
import sendEmail from "../api/sendEmail";
import images from "../assets/images";
import { TextInput } from "../components";
import styles from "./Contact.module.css";

const contactNumber = "07 78 03 91 93";

const initialUserValue = {
  name: undefined,
  society: undefined,
  contact: undefined,
}

function Contact() {
  const [infoUser, setInfoUser] = useState<{
    name?: string;
    society?: string;
    contact?: string;
  }>(initialUserValue);

  const handleSendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (Object.values(infoUser).every(el => !!el)) {
      setInfoUser(initialUserValue)
      await sendEmail(infoUser);
      printToast();
      return false;
    }
  }

  const printToast = () => {
    var toastElement: HTMLElement = document.getElementById("toast")!
    // Add the "show" class to DIV
    toastElement.className = `${styles.toast} ${styles.show}`;
    // After 5 seconds, remove the show class from DIV
    setTimeout(function () { toastElement.className = toastElement.className.replace(styles.show, ""); }, 5000);
  }


  return (
    <div id="contact" className={styles.contact}>
      <div id="toast" className={styles.toast} >
        <img src={images.icon} alt="icon" id="img" className={styles.img} />
        <div id="desc" className={styles.desc}>l'email a bien été envoyé</div>
      </div>
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
            <form method="post" onSubmit={(e) => handleSendEmail(e)} className={styles.form}>
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
              <button type="submit" className={styles.button} >
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
