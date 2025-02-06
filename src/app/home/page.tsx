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
      <Aboutme />
      <section className="flex flex-col justify-center items-center bg-darkSeaGreen rounded-lg md:items-start md:pl-16 md:items-start lg:pl-0 lg:flex-row lg:items-center lg:pl-16">
        <Timon />
        <div className='w-full flex flex-col justify-center items-center md:flex md:justify-end md:flex-col md:relative md:w-3/4 md:-translate-y-12 md:translate-x-40 md:bg-deepNavyBlue md:bg-opacity-80 md:rounded-lg md: p-4 md:text-left lg:p-8 lg:w-1/2 lg:-translate-y-0 lg:translate-x-0 lg:m-16'>
        <h1 className='text-center font-bold text-3xl mb-6 md:text-right lg:text-center' style={{width : '90%'}}>🧭 Con dirección clara, cada objetivo se convierte en destino.</h1>
          <p className="text-center w-60 mb-6 text-lg p-4 md:text-right md:mb-0 lg:text-center" style={{width : '90%'}}>
            ¡Ahoy! Soy Steng, un desarrollador web y capitán fullstack que navega por los mares del código y la creatividad. Desde diseñar interfaces modernas con React y Next.js hasta desarrollar robustas APIs y arquitecturas backend con Node.js, transformo ideas en soluciones digitales que conquistan cualquier desafío.
          </p>
        </div>
      </section>
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
