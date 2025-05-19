"use client";

import { useState, useEffect, useMemo } from "react";
import type { Hero } from "../../interfaces/Hero"; // Ajuste o caminho se necessário
import HeroPicture from "../HeroPicture/HeroPicture";
import HeroDetails from "../HeroDetails/HeroDetails";
import styles from "./HeroesList.module.scss";

interface HeroesListProps {
  heroes: Hero[];
  initialIndex?: number;
  onReturnToGallery?: () => void;
}

export default function HeroesList({
  heroes,
  initialIndex = 0,
  onReturnToGallery,
}: HeroesListProps) {
  const [currentIndex, setCurrentIndex] = useState(
    initialIndex >= 0 && initialIndex < (heroes?.length || 0) ? initialIndex : 0
  );

  useEffect(() => {
    const validInitialIndex =
      initialIndex >= 0 && initialIndex < (heroes?.length || 0)
        ? initialIndex
        : 0;
    if (heroes && heroes.length > 0) {
      setCurrentIndex(validInitialIndex);
    } else {
      setCurrentIndex(0);
    }
  }, [initialIndex, heroes]);

  const currentHero = useMemo(() => {
    if (
      !heroes ||
      heroes.length === 0 ||
      currentIndex < 0 ||
      currentIndex >= heroes.length
    ) {
      return null;
    }
    return heroes[currentIndex];
  }, [heroes, currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? heroes.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === heroes.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!heroes || heroes.length === 0) {
    return (
      <p className={styles.message}>
        Nenhum herói disponível para o carrossel.
      </p>
    );
  }
  if (!currentHero) {
    return <p className={styles.message}>Carregando informações do herói...</p>;
  }

  return (
    <div className={styles.carouselContainer}>
      {onReturnToGallery && (
        <button onClick={onReturnToGallery} className={styles.returnButton}>
          &larr; Voltar à Galeria
        </button>
      )}

      <div className={styles.carouselViewport}>
        {/* Botão Anterior (Seta Esquerda) */}
        {heroes.length > 1 && (
          <button
            onClick={goToPrevious}
            className={`${styles.navButton} ${styles.prev}`}
            aria-label="Herói Anterior"
          >
            &lsaquo;
          </button>
        )}

        {/* Conteúdo Central do Herói (Imagem e Detalhes Lado a Lado) */}
        <div className={styles.heroDisplayArea}>
          <h2 className={styles.heroName}>{currentHero.name}</h2>
          <div className={styles.heroContentRow}>
            {" "}
            {/* Novo wrapper para imagem e detalhes */}
            <div className={styles.heroPictureWrapper}>
              <HeroPicture
                imageUrl={currentHero.imageUrl}
                altText={currentHero.name}
                variant="featured"
              />
            </div>
            <div className={styles.heroDetailsWrapper}>
              <HeroDetails hero={currentHero} />
            </div>
          </div>
        </div>

        {/* Botão Próximo (Seta Direita) */}
        {heroes.length > 1 && (
          <button
            onClick={goToNext}
            className={`${styles.navButton} ${styles.next}`}
            aria-label="Próximo Herói"
          >
            &rsaquo;
          </button>
        )}
      </div>
    </div>
  );
}
