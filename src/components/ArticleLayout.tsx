import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import categories from "../../content/categories.json";
import { getLatestRecipe } from "@/lib/content";
import styles from "./ArticleLayout.module.css";

const QUICK_LINKS = [
  { href: "/about-us/", label: "About Us" },
  { href: "/contact-us/", label: "Contact Us" },
];

type ArticleLayoutProps = {
  title: string;
  image?: string;
  imageAlt?: string;
  date?: string;
  categorySlug?: string;
  categoryName?: string;
  body: string;
};

export default function ArticleLayout({
  title,
  image,
  imageAlt,
  date,
  categorySlug,
  categoryName,
  body,
}: ArticleLayoutProps) {
  const latest = getLatestRecipe();

  return (
    <div className={`${styles.wrap} container`}>
      <article className={styles.main}>
        <h1 className={styles.title}>{title}</h1>

        {(date || categoryName) && (
          <p className={styles.meta}>
            {date && (
              <time dateTime={date}>
                {new Date(date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            )}
            {date && categoryName && <span className={styles.metaDot}>&middot;</span>}
            {categoryName && categorySlug && (
              <Link href={`/category/${categorySlug}/`}>{categoryName}</Link>
            )}
          </p>
        )}

        {image && (
          <Image
            src={image}
            alt={imageAlt ?? title}
            width={900}
            height={900}
            className={styles.hero}
            priority
          />
        )}

        <div className={styles.body}>
          <MDXRemote source={body} />
        </div>
      </article>

      <aside className={styles.sidebar}>
        <div className={styles.sidebarBlock}>
          <h4>Recipes</h4>
          <ul>
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/category/${c.slug}/`}>{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.sidebarBlock}>
          <h4>Quick Links</h4>
          <ul>
            {QUICK_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {latest && (
          <div className={styles.sidebarBlock}>
            <h4>Latest Recipe</h4>
            <Link href={`/recipe/${latest.frontmatter.slug}/`} className={styles.latestCard}>
              <Image
                src={latest.frontmatter.image}
                alt={latest.frontmatter.imageAlt ?? latest.frontmatter.title}
                width={300}
                height={300}
              />
              <span>{latest.frontmatter.title}</span>
            </Link>
          </div>
        )}
      </aside>
    </div>
  );
}
