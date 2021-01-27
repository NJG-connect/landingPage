import React, { useEffect, useState } from 'react';
import { FloatButton } from '../components';
import { Header, Services, Process, Projects, Contact, Footer } from '../scenes';


const numberDayBeforeCanAgain = 1;

function HomeScreen() {
  const [mailHasSent, setMailHasSent] = useState(false)

  const handleSendEmail = () => {
    localStorage.setItem('lastEmailSend', (new Date()).toString());
    setMailHasSent(true);
  }

  useEffect(() => {
    const lastEmailSendString = localStorage.getItem('lastEmailSend');
    if (!!lastEmailSendString) {
      const lastEmailSend = new Date(Date.parse(lastEmailSendString))
      const diffDays: number = parseInt(((new Date().getTime() - lastEmailSend.getTime()) / (1000 * 60 * 60 * 24)) as unknown as string, 10);
      setMailHasSent(diffDays < numberDayBeforeCanAgain);
    }
  }, [])



  return (
    <>
      <FloatButton initalValue={mailHasSent} />
      <Header />
      <Services />
      <Process />
      <Projects />
      <Contact sendEmail={handleSendEmail} mailHasSent={mailHasSent} />
      <Footer />
    </>
  );
}

export default HomeScreen;
