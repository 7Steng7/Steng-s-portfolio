'use client';
import React from 'react';
import Presentation from '../presentation/presentation';
import FrontendPage from '../projects/frontend/page';
import BackendPage from '../projects/backend/page';
import Skills from '../skills/page';
import Aboutme from '../about/page';
import Contact from '../contact/page';
import Ship from '../Header/ship';

export default function Home() {
  return (
    <>
      <Ship />
      <Presentation />
      <Aboutme />
      <Skills />
      <FrontendPage />
      <BackendPage />
      <Contact />
    </>
  );
}
