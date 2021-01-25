import React from 'react';
import { FloatButton } from '../components';
import { Header, Services, Process, Projects, Contact, Footer } from '../scenes';

function HomeScreen() {
  return (
    <>
      <FloatButton />
      <Header />
      <Services />
      <Process />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default HomeScreen;
