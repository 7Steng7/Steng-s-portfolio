'use client';
import React, { useState } from 'react';
import Timon from '../Timon/timon';
import Projects from '../projects/page';
import Skills from '../skills/page';
import Aboutme from '../about/page';
import Contact from '../contact/page';

export default function Home() {
  return (
    <>
      <section className="flex flex-col justify-center items-center bg-darkSeaGreen rounded-lg">
        <Timon />
        <h1 className='w-60 text-center font-bold text-xl mb-6'>🧭 Con dirección clara, cada objetivo se convierte en destino.</h1>
          <p className="text-sm max-w-md text-center w-60 mb-6 text-lg p-4" style={{width : '80%'}}>
            ¡Ahoy! Soy Steng, un desarrollador web y capitán fullstack que navega por los mares del código y la creatividad. Desde diseñar interfaces modernas con React y Next.js hasta desarrollar robustas APIs y arquitecturas backend con Node.js, transformo ideas en soluciones digitales que conquistan cualquier desafío.
          </p>
      </section>
      <Aboutme />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
