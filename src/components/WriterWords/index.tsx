"use client";
import React, { useState, useEffect } from "react";

interface TypewriterProps {
  words: string[];
  typingSpeed?: number; // Velocidade de digitação em ms
  pauseTime?: number; // Tempo de pausa entre as palavras
}

export default function Typewriter({ words, typingSpeed = 100, pauseTime = 800 }: TypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];

    // Manipula a digitação ou exclusão
    const handleTyping = () => {
      if (!isDeleting) {
        // Adiciona uma letra por vez
        setDisplayedText((prev) => word.substring(0, prev.length + 1));
        if (displayedText === word) {
          setTimeout(() => setIsDeleting(true), pauseTime); // Pausa antes de apagar
        }
      } else {
        // Remove uma letra por vez
        setDisplayedText((prev) => word.substring(0, prev.length - 1));
        if (displayedText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length); // Avança para a próxima palavra
        }
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout); // Cleanup do timeout
  }, [displayedText, isDeleting, currentWordIndex, words, typingSpeed, pauseTime]);

  return <>{displayedText}</>;
}
