import React from "react";

export default function Ship() {
  return (
<section className="w-full h-auto flex items-center justify-center overflow-hidden relative z-10">
    <div className="w-full h-auto max-h-screen relative ">
        <img 
            src="/assets/shipBackground.png" 
            alt="Ship" 
            className="w-full h-auto max-h-screen object-cover object-center animate-bounce" // Aplicar la animación aquí
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-deepNavyBlue to-transparent"></div>
    </div>
</section>
  );
}