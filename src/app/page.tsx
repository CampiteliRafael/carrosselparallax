// src/app/page.tsx
import HeroesList from "./components/Carousel/HeroesList";
import type { Hero } from "./interfaces/Hero"; // Ajuste o caminho se 'Hero' estiver em @/types/hero

// Função para buscar os dados da sua API
async function getHeroesData(): Promise<Hero[]> {
  // IMPORTANTE: Use a URL absoluta para fetch no servidor
  // Crie NEXT_PUBLIC_APP_URL no seu arquivo .env.local (ex: NEXT_PUBLIC_APP_URL=http://localhost:3000)
  const apiUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  const response = await fetch(`${apiUrl}/api/getHeroes`, {
    // Certifique-se que /api/getHeroes é seu endpoint correto
    cache: "no-store", // Para desenvolvimento ou dados que mudam frequentemente
    // Para produção, considere: next: { revalidate: 3600 } // revalida a cada hora
  });

  if (!response.ok) {
    console.error(`API Error: ${response.status} ${response.statusText}`);
    const errorBody = await response.text(); // Tenta ler o corpo do erro como texto
    console.error("Error body:", errorBody);
    // Tenta parsear como JSON se for um erro estruturado da sua API
    try {
      const errorJson = JSON.parse(errorBody);
      throw new Error(
        errorJson.message ||
          `Falha ao buscar heróis. Status: ${response.status}`
      );
    } catch (e) {
      // Se não for JSON, usa o statusText ou uma mensagem genérica
      throw new Error(
        errorBody || `Falha ao buscar heróis. Status: ${response.status}`
      );
    }
  }
  return response.json();
}

// A página agora precisa ser 'async' para usar 'await' no nível superior
export default async function Home() {
  let heroesData: Hero[] = [];
  let fetchError: string | null = null;

  try {
    heroesData = await getHeroesData();
  } catch (e: any) {
    fetchError =
      e.message ||
      "Ocorreu um erro desconhecido ao carregar os heróis para a página.";
    console.error("Erro na busca de dados da página Home:", e);
    // heroesData permanecerá como []
  }

  return (
    <main style={{ padding: "20px" }}>
      {" "}
      {/* Adicionei um <main> para estrutura semântica */}
      <h1>Meu Carrossel de Heróis na Página Inicial</h1>
      {fetchError && (
        <div
          style={{
            color: "red",
            border: "1px solid red",
            padding: "10px",
            marginBottom: "20px",
          }}
        >
          <p>
            <strong>Erro ao carregar dados para o carrossel:</strong>
          </p>
          <p>{fetchError}</p>
          <p>
            Verifique o console do servidor (onde `npm run dev` está rodando) e
            o console da sua API (`/api/getHeroes`) para mais detalhes.
          </p>
        </div>
      )}
      {/* AGORA VOCÊ ESTÁ PASSANDO A PROP 'heroes' */}
      <HeroesList heroes={heroesData} />
    </main>
  );
}
