import React, { useState } from "react";
import images from "../assets/images";
import { TextInput } from "../components";
import styles from "./Contact.module.css";

const contactNumber = "07 78 03 91 93";

function Contact() {
  const [infoUser, setInfoUser] = useState<{
    name?: string;
    society?: string;
    numberOrEmail?: string;
  }>({
    name: undefined,
    society: undefined,
    numberOrEmail: undefined,
  });

  return (
    <div id={styles.contact}>
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
            <form action="" method="get" className={styles.form}>
              <TextInput
                value={infoUser.name}
                onChange={(name: string) => setInfoUser({ ...infoUser, name })}
                label="Nom"
              />
              <TextInput
                value={infoUser.society}
                onChange={(society: string) =>
                  setInfoUser({ ...infoUser, society })
                }
                label="Société"
              />
              <TextInput
                value={infoUser.numberOrEmail}
                onChange={(numberOrEmail: string) =>
                  setInfoUser({ ...infoUser, numberOrEmail })
                }
                label="Mail / Tel"
              />
              <input className={styles.button} type="submit" value="Entrer en contact" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
