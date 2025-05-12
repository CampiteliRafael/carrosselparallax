// src/components/Carousel/HeroesList.tsx
"use client";

import { useState, useEffect } from "react";
// Importe a interface do arquivo separado
import type { HeroesListProps } from "@/app/interfaces/HeroesListProps"; // Ajuste o caminho conforme sua estrutura
// Importe Hero se não for reexportado por props.ts
import type { Hero } from "@/app/interfaces/Hero";

export default function HeroesList({ heroes }: HeroesListProps) {
  // ... (lógica do componente)

  if (!heroes || heroes.length === 0) {
    return <p>Nenhum herói para exibir no carrossel (HeroesList).</p>;
  }

  // ... (resto da renderização do carrossel)
  return (
    <div>
      {/* Exemplo simples */}
      {heroes.map((hero) => (
        <div key={hero.id}>{hero.name}</div>
      ))}
    </div>
  );
}
