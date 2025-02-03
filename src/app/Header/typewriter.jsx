import { useState, useEffect } from "react";

const texts = ["FullStack Developer", "Software Engineer"];

export default function Typewriter() {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[textIndex];

      if (isDeleting) {
        setCurrentText((prev) => prev.slice(0, -1));
        if (charIndex === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setCurrentText(fullText.slice(0, charIndex + 1));
        if (charIndex === fullText.length) {
          setIsDeleting(true);
        }
      }

      setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));
    };

    const timeout = setTimeout(handleTyping, isDeleting ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <div className="text-2xl font-bold text-white">
      {currentText}
      <span className="animate-blink">|</span>
    </div>
  );
}
