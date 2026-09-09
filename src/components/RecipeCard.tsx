import Link from "next/link";
import Image from "next/image";
import styles from "./RecipeCard.module.css";

type RecipeCardProps = {
  slug: string;
  title: string;
  image: string;
  imageAlt?: string;
};

export default function RecipeCard({ slug, title, image, imageAlt }: RecipeCardProps) {
  return (
    <article className={styles.card}>
      <Link href={`/recipe/${slug}/`} className={styles.thumbLink} tabIndex={-1}>
        <Image
          src={image}
          alt={imageAlt ?? ""}
          width={400}
          height={400}
          className={styles.thumb}
        />
      </Link>
      <h3 className={styles.title}>
        <Link href={`/recipe/${slug}/`}>{title}</Link>
      </h3>
    </article>
  );
}
