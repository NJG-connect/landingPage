import React, { lazy, useEffect, useState } from 'react';
import { FloatButton, FloatButtonDevis } from '../components';
import { Header, Services, Process, Projects, Contact, Footer, LoaderAnimation } from '../scenes';
const Devis = lazy(() => import('../scenes/devis/Devis'));

const numberDayBeforeCanAgain = 1;

const localStoreKey = {
  lastEmailSend: "lastEmailSend",
  newUser: "newUser",
};

function HomeScreen() {
  const [mailHasSent, setMailHasSent] = useState(false);
  const [loadingAnimation, setLoadingAnimation] = useState(false);
  const [doADevis, setdoADevis] = useState(false);

  const handleSendEmail = () => {
    localStorage.setItem(localStoreKey.lastEmailSend, (new Date()).toString());
    setMailHasSent(true);
  }

  // if user its new for do the animation
  useEffect(() => {
    const newUserString = localStorage.getItem(localStoreKey.newUser);
    if (!!newUserString) {
      const newUser = new Date(Date.parse(newUserString))
      const diffDaysForNewUserAnimation: number = parseInt(((new Date().getTime() - newUser.getTime()) / (1000 * 60 * 60 * 24)) as unknown as string, 10);
      setLoadingAnimation(diffDaysForNewUserAnimation < numberDayBeforeCanAgain);
    }
  }, [])

  // if user can send again mail 
  useEffect(() => {
    const lastEmailSendString = localStorage.getItem(localStoreKey.lastEmailSend);
    if (!!lastEmailSendString) {
      const lastEmailSend = new Date(Date.parse(lastEmailSendString))
      const diffDays: number = parseInt(((new Date().getTime() - lastEmailSend.getTime()) / (1000 * 60 * 60 * 24)) as unknown as string, 10);
      setMailHasSent(diffDays < numberDayBeforeCanAgain);
    }
  }, [])

  const handleAnimationIsDone = () => {
    setLoadingAnimation(true)
    localStorage.setItem(localStoreKey.newUser, (new Date()).toString());
  }

  return (
    <>
      {loadingAnimation === false && <LoaderAnimation setLoadingAnimation={handleAnimationIsDone} />}
      <FloatButton initalValue={mailHasSent} />
      <FloatButtonDevis onClick={() => setdoADevis(true)} />
      <Header />
      <Services />
      <Process />
      <Projects />
      <Contact sendEmail={handleSendEmail} mailHasSent={mailHasSent} />
      { doADevis && <Devis onClose={() => setdoADevis(false)} />}
      <Footer />
    </>
  );
}

export default HomeScreen;
