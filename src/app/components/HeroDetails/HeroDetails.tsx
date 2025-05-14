// src/components/HeroDetails/HeroDetails.tsx
import type { Hero } from "../../interfaces/Hero"; // Ajuste o caminho

interface HeroDetailsProps {
  hero: Hero; // Recebe o objeto Hero inteiro ou apenas a parte 'details'
  // Se for só details: details: Hero['details'];
}

export default function HeroDetails({ hero }: HeroDetailsProps) {
  return (
    <div className="hero-details">
      <p>
        <strong>Universo:</strong> {hero.universe}
      </p>
      <h4>Detalhes Pessoais:</h4>
      <ul>
        <li>
          <strong>Nome Completo:</strong> {hero.details.fullName}
        </li>
        <li>
          <strong>Aniversário:</strong> {hero.details.birthday}
        </li>
        <li>
          <strong>Terra Natal:</strong> {hero.details.homeland}
        </li>
        <li>
          <strong>Altura:</strong> {hero.details.height} m
        </li>
        <li>
          <strong>Peso:</strong> {hero.details.weight} kg
        </li>
      </ul>
    </div>
  );
}
