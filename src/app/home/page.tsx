'use client';
import React from 'react';
import Presentation from '../presentation/presentation';
import Projects from '../projects/page';
import Skills from '../skills/page';
import Aboutme from '../about/page';
import Contact from '../contact/page';

export default function Home() {
  return (
    <>
      <Presentation />
      <Aboutme />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
