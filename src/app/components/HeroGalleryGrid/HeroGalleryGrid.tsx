"use client";

import type { Hero } from "../../interfaces/Hero";
import styles from "./HeroGalleryGrid.module.scss";

interface HeroGalleryGridProps {
  heroes: Hero[];
  onHeroSelect: (index: number) => void;
}

export default function HeroGalleryGrid({
  heroes,
  onHeroSelect,
}: HeroGalleryGridProps) {
  if (!heroes || heroes.length === 0) {
    console.log("HeroGalleryGrid: Nenhum herói recebido ou array vazio.");
    return <p>Nenhum herói para mostrar na galeria.</p>;
  }
  console.log("HeroGalleryGrid: Heróis recebidos para a galeria:", heroes);

  return (
    <div className={styles.grid}>
      {" "}
      {heroes.map((hero, index) => (
        <div
          key={hero.id}
          className={styles.item}
          onClick={() => onHeroSelect(index)}
          title={`Ver detalhes de ${hero.name}`}
        >
          <img
            src={hero.imageUrl || "/images/placeholder.png"}
            alt={hero.name}
            className={styles.image}
          />
          <p className={styles.name}>{hero.name}</p>
        </div>
      ))}
    </div>
  );
}
