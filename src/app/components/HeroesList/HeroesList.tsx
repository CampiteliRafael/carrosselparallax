"use client";

import { useState, useEffect } from "react";
import type { Hero } from "../../interfaces/Hero";
import HeroPicture from "../HeroPicture/HeroPicture";
import HeroDetails from "../HeroDetails/HeroDetails";

interface HeroesListProps {
  heroes: Hero[];
}

export default function HeroesList({ heroes }: HeroesListProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!heroes || heroes.length === 0) {
    return <p>Nenhum herói para exibir no momento.</p>;
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

  const currentHero = heroes[currentIndex];

  return (
    <div
      className="heroes-list-carousel"
      style={{ textAlign: "center", maxWidth: "500px", margin: "auto" }}
    >
      <div
        className="carousel-slide-item"
        style={{
          border: "1px solid #eee",
          padding: "16px",
          borderRadius: "8px",
        }}
      >
        <h2>{currentHero.name}</h2>
        <HeroPicture
          imageUrl={currentHero.imageUrl}
          altText={currentHero.name}
        />
        <HeroDetails hero={currentHero} />{" "}
      </div>

      {heroes.length > 1 && (
        <div className="carousel-navigation" style={{ marginTop: "16px" }}>
          <button onClick={goToPrevious} disabled={heroes.length <= 1}>
            Anterior
          </button>
          <span style={{ margin: "0 10px" }}>
            {currentIndex + 1} / {heroes.length}
          </span>
          <button onClick={goToNext} disabled={heroes.length <= 1}>
            Próximo
          </button>
        </div>
      )}
    </div>
  );
}
