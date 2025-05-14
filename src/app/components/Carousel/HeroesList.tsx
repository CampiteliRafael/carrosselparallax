"use client";
import type { Hero } from "../../interfaces/Hero";
import HeroPicture from "../HeroPicture/HeroPicture";
import HeroDetails from "../HeroDetails/HeroDetails";

interface CarouselProps {
  items: Hero[];
}

export default function Carousel({ items }: CarouselProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  if (!items || items.length === 0) {
    return <p>Nenhum item para o carrossel.</p>;
  }

  return (
    <div className="custom-carousel-wrapper">
      <Slider {...settings}>
        {items.map((hero) => (
          <div
            key={hero.id}
            className="carousel-slide-item"
            style={{ padding: "20px", textAlign: "center" }}
          >
            <h2>{hero.name}</h2>
            <HeroPicture imageUrl={hero.imageUrl} altText={hero.name} />
            <HeroDetails hero={hero} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
