import Link from "next/link";
import type { Metadata } from "next";
import { getAllArticles, getAllCategories, getAllRecipes } from "@/lib/content";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Sitemap | Smokehouse Pit Beef",
  description: "Browse every page, category, recipe, and article on Smokehouse Pit Beef.",
};

const PAGES = [
  { href: "/", label: "Home" },
  { href: "/about-us/", label: "About Us" },
  { href: "/contact-us/", label: "Contact Us" },
  { href: "/privacy-policy/", label: "Privacy Policy" },
  { href: "/terms-and-conditions/", label: "Terms and Conditions" },
  { href: "/sample-page/", label: "Sample Page" },
  { href: "/be-a-grillmaster/", label: "Be a Grillmaster" },
];

export default function SitemapPage() {
  const categories = getAllCategories();
  const recipes = getAllRecipes();
  const articles = getAllArticles();

  return (
    <div className={`${styles.wrap} container`}>
      <h1 className={styles.title}>Sitemap</h1>

      <div className={styles.grid}>
        <section className={styles.section}>
          <h2>Pages</h2>
          <ul>
            {PAGES.map((p) => (
              <li key={p.href}>
                <Link href={p.href}>{p.label}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Categories</h2>
          <ul>
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/category/${c.slug}/`}>{c.name}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Recipes</h2>
          <ul>
            {recipes.map((r) => (
              <li key={r.frontmatter.slug}>
                <Link href={`/recipe/${r.frontmatter.slug}/`}>{r.frontmatter.title}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Articles</h2>
          <ul>
            {articles.map((a) => (
              <li key={a.frontmatter.slug}>
                <Link href={`/${a.frontmatter.slug}/`}>{a.frontmatter.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
