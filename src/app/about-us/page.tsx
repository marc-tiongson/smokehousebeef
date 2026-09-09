import Link from "next/link";
import type { Metadata } from "next";
import { getAllCategories } from "@/lib/content";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Us | Smokehouse Pit Beef",
  description: "The go-to destination for BBQ and grilling enthusiasts everywhere!",
};

export default function AboutUsPage() {
  const categories = getAllCategories();

  return (
    <div className={`${styles.wrap} container`}>
      <h1 className={styles.title}>About Us</h1>

      <div className={styles.body}>
        <p>
          The go-to destination for BBQ and grilling enthusiasts everywhere! Whether you&rsquo;re
          an armchair griller or a seasoned barbeque nerd, you&rsquo;ll find everything you need to
          know about how to grill like a pro right here. From tips and tricks for never stressing
          out over your grilling plans to delicious recipes guaranteed to satisfy even the
          pickiest of taste buds, there&rsquo;s something for every weekend warrior at
          SmokehousePitBeef.
        </p>
        <p>
          So what are you waiting for? Fire up that smoker or gas grill, and start making some
          memories with your friends and family today!
        </p>
      </div>

      <div className={styles.categories}>
        <h2>Our Recipes</h2>
        <ul className={styles.categoryList}>
          {categories.map((c) => (
            <li key={c.slug}>
              <Link href={`/category/${c.slug}/`}>{c.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
