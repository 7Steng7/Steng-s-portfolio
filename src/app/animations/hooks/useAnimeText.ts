"use client";

import { useEffect } from "react";
import { createTimeline, stagger, text } from "animejs";

interface UseAnimeTextOptions {
  type?: "chars" | "words";
  loop?: boolean;
  delay?: number;
}

export function useAnimeText(
  ref: React.RefObject<HTMLElement>,
  options: UseAnimeTextOptions = {}
) {
  const { type = "chars", loop = true, delay = 80 } = options;

  useEffect(() => {
    if (!ref.current) return;

    // Dividir texto
    const parts =
      type === "words"
        ? text.split(ref.current, { words: true })
        : text.split(ref.current, { chars: true });

    const items = type === "words" ? parts.words : parts.chars;

    // Timeline
    createTimeline({
      loop,
      defaults: { ease: 'inOut(3)', duration: 650 },
    })
      .add(
        items,
        {
          opacity: [0, 1],
          y: ["1em", "0em"],
        },
        stagger(delay, { from: "first" })
      )
      .add(
        items,
        {
          opacity: [1, 0],
          y: [$el => +$el.dataset.line % 2 ? '100%' : '-100%', '0%'],
        },
        stagger(delay, { from: "last" })
      )
      .init();
  }, [ref, type, loop, delay]);
}
