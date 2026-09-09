import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllCategories } from "@/lib/content";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Us | Smokehouse Pit Beef",
  description: "The go-to destination for BBQ and grilling enthusiasts everywhere!",
};

const GALLERY_ROW_1 = [
  { src: "/images/about/cat_grill-tips_900x900-1.webp", alt: "Charcoal grill tips" },
  { src: "/images/about/cat_sauces_900x900-1.webp", alt: "BBQ sauce" },
];

const GALLERY_ROW_2 = [
  { src: "/images/about/cat_sides_900x900-1.webp", alt: "BBQ sides" },
  { src: "/images/about/cat_smokers_grills_900x900-1.webp", alt: "Smokers and grills" },
  { src: "/images/about/cat_pork_900x900-1.webp", alt: "Pork rubs and spices" },
];

export default function AboutUsPage() {
  const categories = getAllCategories();

  return (
    <div>
      <div className={`${styles.hero} container`}>
        <Image
          src="/images/about/hero.webp"
          alt="Smoked brisket with coffee rub"
          width={1024}
          height={683}
          className={styles.heroImage}
        />
        <div>
          <h1 className={styles.title}>About Us</h1>
          <p>
            The go-to destination for BBQ and grilling enthusiasts everywhere! Whether
            you&rsquo;re an armchair griller or a seasoned barbeque nerd, you&rsquo;ll find
            everything you need to know about how to grill like a pro right here. From tips and
            tricks for never stressing out over your grilling plans to delicious recipes
            guaranteed to satisfy even the pickiest of taste buds, there&rsquo;s something for
            every weekend warrior at SmokehousePitBeef. So what are you waiting for? Fire up
            that smoker or gas grill, and start making some memories with your friends and
            family today!
          </p>
        </div>
      </div>

      <div className={`${styles.recipesSection} container`}>
        <h2>Our Recipes</h2>
        <div className={styles.categoryGrid}>
          {categories.map((c) => (
            <Link key={c.slug} href={`/category/${c.slug}/`} className={styles.categoryItem}>
              <Image src={c.icon} alt="" width={90} height={90} />
              <span>{c.name}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className={styles.gallerySection}>
        <h2 className={styles.galleryTitle}>Gallery</h2>
        <div className={`${styles.galleryRow} container`}>
          {GALLERY_ROW_1.map((g) => (
            <Image key={g.src} src={g.src} alt={g.alt} width={500} height={500} />
          ))}
        </div>
        <div className={`${styles.galleryRow} ${styles.galleryRowThree} container`}>
          {GALLERY_ROW_2.map((g) => (
            <Image key={g.src} src={g.src} alt={g.alt} width={333} height={333} />
          ))}
        </div>
      </div>
    </div>
  );
}
