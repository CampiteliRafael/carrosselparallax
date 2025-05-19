import { error } from "console";
import styles from "./HeroPicture.module.scss";
interface HeroPictureProps {
  imageUrl?: string;
  altText: string;
  variant?: "featured" | "thumbnail";
}

export default function HeroPicture({
  imageUrl,
  altText,
  variant = "featured",
}: HeroPictureProps) {
  const imageSrc = imageUrl || "/images/placeholder.png";

  const containerClass = `${styles.heroPictureContainer} ${
    variant === "featured" ? styles.featured : ""
  } ${variant === "thumbnail" ? styles.thumbnail : ""}`;

  return (
    <div className={containerClass}>
      <img
        className={styles.heroImage}
        src={imageSrc}
        alt={altText}
        onError={(e) => {}}
      />
    </div>
  );
}
