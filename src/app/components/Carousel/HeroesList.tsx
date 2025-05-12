"use client";
import { useEffect, useState } from "react";
import type { Hero } from "@/app/interfaces/Hero";
import { HeroesListProps } from "@/app/interfaces/HeroesListProps";

export default function HeroesList({ heroes }: HeroesListProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!heroes || heroes.length === 0) {
    return <p>Nenhum herói para exibir no carrossel.</p>;
  }

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? heroes.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === heroes.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return <div className="carousel-container"></div>;
}
