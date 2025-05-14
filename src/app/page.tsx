import HeroesList from "./components/HeroesList/HeroesList";
import type { Hero } from "./interfaces/Hero";

async function getHeroesData(): Promise<Hero[]> {
  const apiUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  const response = await fetch(`${apiUrl}/api/getHeroes`, {
    cache: "no-store",
  });

  if (!response.ok) {
    console.error(`API Error: ${response.status} ${response.statusText}`);
    const errorBody = await response.text();
    console.error("Error body:", errorBody);
    try {
      const errorJson = JSON.parse(errorBody);
      throw new Error(
        errorJson.message ||
          `Falha ao buscar heróis. Status: ${response.status}`
      );
    } catch (e) {
      throw new Error(
        errorBody || `Falha ao buscar heróis. Status: ${response.status}`
      );
    }
  }
  return response.json();
}

export default async function Home() {
  let heroesData: Hero[] = [];
  let fetchError: string | null = null;

  try {
    heroesData = await getHeroesData();
    console.log(
      "DADOS BUSCADOS NA PÁGINA (SERVIDOR):",
      JSON.stringify(heroesData, null, 2)
    );
  } catch (e: any) {
    fetchError =
      e.message ||
      "Ocorreu um erro desconhecido ao carregar os heróis para a página.";
    console.error("Erro na busca de dados da página Home:", e);
  }

  return (
    <main style={{ padding: "20px" }}>
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
      <HeroesList heroes={heroesData} />
    </main>
  );
}
