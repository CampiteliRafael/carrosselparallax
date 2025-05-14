interface HeroPictureProps {
  imageUrl?: string;
  altText: string;
}

export default function HeroPicture({ imageUrl, altText }: HeroPictureProps) {
  const imageSrc = imageUrl || "/home-background.png";

  return (
    <div className="hero-picture" style={{ marginBottom: "10px" }}>
      <img
        src={imageSrc}
        alt={altText}
        style={{
          maxWidth: "100%",
          maxHeight: "300px",
          height: "auto",
          objectFit: "contain",
          borderRadius: "4px",
        }}
      />
    </div>
  );
}
