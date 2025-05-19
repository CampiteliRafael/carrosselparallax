"use client";

import { useState, useEffect } from "react";
import HeroesList from "../app/components/HeroesList/HeroesList";
import HeroGalleryGrid from "../app/components/HeroGalleryGrid/HeroGalleryGrid";
import type { Hero } from "../app/interfaces/Hero";

async function fetchHeroesData(): Promise<Hero[]> {
  const apiUrl = process.env.NEXT_PUBLIC_APP_URL || "";
  const response = await fetch(`${apiUrl}/api/getHeroes`, {
    cache: "no-store",
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error(
      "API Error fetching heroes:",
      errorBody,
      response.status,
      response.statusText
    );
    throw new Error(
      `Falha ao buscar heróis. Status: ${response.status}. Detalhes: ${errorBody}`
    );
  }
  return response.json();
}

export default function HomePage() {
  const [heroesData, setHeroesData] = useState<Hero[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"gallery" | "carousel">("gallery");
  const [initialCarouselIndex, setInitialCarouselIndex] = useState<number>(0);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      setFetchError(null);
      try {
        const data = await fetchHeroesData();
        setHeroesData(data);
      } catch (e: any) {
        console.error("Erro ao carregar dados na HomePage:", e);
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      ></div>
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
    <main className="page-content">
      {" "}
      {viewMode === "gallery" ? (
        <>
          <HeroGalleryGrid
            heroes={heroesData}
            onHeroSelect={handleHeroSelectFromGallery}
          />
        </>
      ) : (
        <HeroesList
          heroes={heroesData}
          initialIndex={initialCarouselIndex}
          onReturnToGallery={handleReturnToGallery}
        />
      )}
    </main>
  );
}
