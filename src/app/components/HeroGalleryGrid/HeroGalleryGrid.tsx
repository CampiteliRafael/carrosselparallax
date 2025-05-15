"use client";

import type { Hero } from "../../interfaces/Hero"; // Ajuste o caminho se necessário
// import HeroPicture from '../HeroPicture/HeroPicture'; // Opcional, para mostrar a imagem

interface HeroGalleryGridProps {
  heroes: Hero[];
  onHeroSelect: (index: number) => void; // Função para chamar quando um herói é selecionado
}

export default function HeroGalleryGrid({
  heroes,
  onHeroSelect,
}: HeroGalleryGridProps) {
  if (!heroes || heroes.length === 0) {
    return <p>Nenhum herói para mostrar na galeria.</p>;
  }

  return (
    <div
      className="hero-gallery-grid"
      style={{
        display: "flex",
        flexWrap: "wrap", // Para que os itens quebrem para a próxima linha se não couberem
        gap: "20px", // Espaçamento entre os cartões
        justifyContent: "center", // Centraliza os cartões se houver espaço extra na linha
      }}
    >
      {heroes.map((hero, index) => (
        <div
          key={hero.id}
          onClick={() => onHeroSelect(index)}
          style={{
            cursor: "pointer",
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "15px",
            width: "180px", // Largura de cada "cartão" de herói
            textAlign: "center",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src={hero.imageUrl || "/images/placeholder.png"} // Use seu placeholder
            alt={hero.name}
            style={{
              width: "100%", // Imagem ocupa toda a largura do cartão
              height: "150px", // Altura fixa para as imagens da galeria
              objectFit: "cover", // ou 'contain'
              borderRadius: "4px",
              marginBottom: "10px",
            }}
          />
          <h3 style={{ fontSize: "1.1em", margin: "0" }}>{hero.name}</h3>
        </div>
      ))}
    </div>
  );
}
