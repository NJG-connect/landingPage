import React from 'react';
import { FloatButton } from '../components';
import { Header, Services, Process, Projects, Contact } from '../scenes';

function HomeScreen() {
  return (
    <>
      <FloatButton />
      <Header />
      <Services />
      <Process />
      <Projects />
      <Contact />
    </>
  );
}

export default HomeScreen;
