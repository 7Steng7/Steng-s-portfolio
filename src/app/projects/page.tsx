import React, { useRef } from 'react';

export default function Aboutme() {

  return (
    <>
      <div className="max-w-3xl h-auto rounded-lg shadow-md flex flex-col justify-center items-center bg-darkSeaGreen py-16">
        <p className='m-5'>ToDoList</p>
        <a 
          href="https://todolist-steng.vercel.app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group"
        >
          <div className="relative w-60 h-60 transform transition-all duration-300 group-hover:scale-110">
            <img  
              src="/assets/ToDoList.png" 
              alt="About me" 
              className="w-full h-full rounded-lg shadow-md text-center transition-all duration-300 filter"
            />
            <div className="absolute inset-0 bg-darkSeaGreen opacity-40 mix-blend-multiply rounded-lg transition-all duration-300 group-hover:opacity-0"></div>
          </div>
        </a>
      </div>
    </>
  );
}
