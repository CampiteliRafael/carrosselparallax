"use client";

import { useState, useEffect } from "react";
import HeroesList from "./components/HeroesList/HeroesList"; // Caminho para seu HeroesList existente
import HeroGalleryGrid from "./components/HeroGalleryGrid/HeroGalleryGrid"; // Novo componente que vamos criar
import type { Hero } from "../app/interfaces/Hero"; // Ajuste o caminho se necessário

// Se você mantiver a função de fetch aqui, ela será chamada no cliente.
// Alternativamente, os dados poderiam ser buscados por um Server Component pai e passados como prop.
async function fetchHeroesData(): Promise<Hero[]> {
  const apiUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  const response = await fetch(`${apiUrl}/api/getHeroes`, {
    cache: "no-store",
  });
  if (!response.ok) {
    // Lançar um erro aqui fará com que o Error Boundary (se houver) seja ativado
    // ou pode ser pego pelo catch no useEffect.
    const errorBody = await response.text();
    console.error("API Error:", errorBody);
    throw new Error(
      `Falha ao buscar heróis. Status: ${response.status}. Response: ${errorBody}`
    );
  }
  return response.json();
}

export default function Home() {
  const [heroesData, setHeroesData] = useState<Hero[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  const [viewMode, setViewMode] = useState<"gallery" | "carousel">("gallery"); // Estado para controlar a visualização
  const [initialCarouselIndex, setInitialCarouselIndex] = useState<number>(0);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      setFetchError(null);
      try {
        const data = await fetchHeroesData();
        setHeroesData(data);
      } catch (e: any) {
        console.error("Erro na busca de dados da página Home:", e);
        setFetchError(
          e.message || "Ocorreu um erro desconhecido ao carregar os heróis."
        );
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  const handleHeroSelectFromGallery = (index: number) => {
    setInitialCarouselIndex(index);
    setViewMode("carousel");
  };

  const handleReturnToGallery = () => {
    setViewMode("gallery");
  };

  if (isLoading) {
    return (
      <p style={{ textAlign: "center", padding: "50px" }}>
        Carregando heróis...
      </p>
    );
  }

  if (fetchError) {
    return (
      <div style={{ color: "red", textAlign: "center", padding: "50px" }}>
        <p>
          <strong>Erro ao carregar dados:</strong>
        </p>
        <p>{fetchError}</p>
      </div>
    );
  }

  return (
    <main style={{ padding: "20px" }}>
      {viewMode === "gallery" ? (
        <>
          <HeroGalleryGrid
            heroes={heroesData}
            onHeroSelect={handleHeroSelectFromGallery}
          />
        </>
      ) : (
        // Passamos os heroes, o índice inicial e a função para voltar
        <HeroesList
          heroes={heroesData}
          initialIndex={initialCarouselIndex}
          onReturnToGallery={handleReturnToGallery} // Nova prop
        />
      )}
    </main>
  );
}
