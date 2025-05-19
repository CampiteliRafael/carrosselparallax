import type { Hero } from "../../interfaces/Hero";
interface HeroDetailsProps {
  hero: Hero;
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
