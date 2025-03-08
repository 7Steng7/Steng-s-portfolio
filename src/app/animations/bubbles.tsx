'use client'
import React, { useEffect, useState } from "react";

// Tipo para las propiedades de cada burbuja
type Bubble = {
  id: number;
  left: string;
  radius: string;
  floatDuration: string;
  swayDuration: string;
  floatDelay: string;
  swayDelay: string;
  swayType: string;
};

const Bubbles: React.FC = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  // Función para generar un número aleatorio dentro de un rango
  const randomRange = (min: number, max: number): number =>
    Math.random() * (max - min) + min;

  // Función para seleccionar un valor aleatorio de una lista
  const sample = <T,>(list: T[]): T =>
    list[Math.floor(Math.random() * list.length)];

  // Generar las burbujas solo en el cliente
  useEffect(() => {
    const bubbleCount = 50;
    const newBubbles: Bubble[] = Array.from({ length: bubbleCount }).map((_, i) => {
      const swayType = sample(["sway-left-to-right", "sway-right-to-left"]);

      return {
        id: i,
        left: `${randomRange(0, 100)}vw`, // Posición horizontal aleatoria
        radius: `${randomRange(1, 10)}vw`, // Tamaño aleatorio
        floatDuration: `${randomRange(6, 12)}s`, // Duración de la animación de flotar
        swayDuration: `${randomRange(4, 6)}s`, // Duración de la animación de balanceo
        floatDelay: `${randomRange(0, 4)}s`, // Retraso de la animación de flotar
        swayDelay: `${randomRange(0, 4)}s`, // Retraso de la animación de balanceo
        swayType, // Tipo de balanceo
      };
    });

    setBubbles(newBubbles);
  }, []);

  return (
    <div className="w-full h-full overflow-hidden bg-deepNavyBlue">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute block rounded-full bg-darkSeaGreen/30 animate-float-up"
          style={{
            left: bubble.left,
            bottom: "-10%",
            width: bubble.radius,
            height: bubble.radius,
            animation: `float-up ${bubble.floatDuration} ${bubble.floatDelay} ease-in infinite`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Bubbles;