'use client'
import React, { useEffect, useState } from "react";

// Tipo para las propiedades de cada burbuja
type Bubble = {
  id: number;
  left: string;
  radius: string;
  floatDuration: string;
  floatDelay: string;
};

const Bubbles: React.FC = () => {

  // Derechos de autor de la animación: https://codepen.io/alphardex/pen/jOWMGON
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  const randomRange = (min: number, max: number): number =>
    Math.random() * (max - min) + min;

  useEffect(() => {
    const bubbleCount = 50;
    const newBubbles: Bubble[] = Array.from({ length: bubbleCount }).map((_, i) => {

      return {
        id: i,
        left: `${randomRange(0, 100)}vw`,
        radius: `${randomRange(1, 10)}vw`,
        floatDuration: `${randomRange(6, 12)}s`,
        floatDelay: `${randomRange(0, 4)}s`,
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