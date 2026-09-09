import Link from "next/link";
import Image from "next/image";
import categories from "../../content/categories.json";
import { getLatestRecipe } from "@/lib/content";
import styles from "./Footer.module.css";

const QUICK_LINKS = [
  { href: "/about-us/", label: "About Us" },
  { href: "/contact-us/", label: "Contact Us" },
  { href: "/privacy-policy/", label: "Privacy Policy" },
];

const FOOTER_CATEGORIES = ["beef", "grilltips", "pork", "sauces", "rubs", "smokersgrills"];

export default function Footer() {
  const latest = getLatestRecipe();
  const footerCategories = categories.filter((c) => FOOTER_CATEGORIES.includes(c.slug));

  return (
    <footer className={styles.footer}>
      <div className={`${styles.grid} container`}>
        <div className={styles.col}>
          <Image
            src="/images/brand/logo-white.png"
            alt="Smokehouse Pit Beef"
            width={954}
            height={105}
            className={styles.logo}
          />
          <p className={styles.blurb}>
            The go-to destination for BBQ and grilling enthusiasts everywhere! Whether
            you&rsquo;re an armchair griller or a seasoned barbeque nerd, you&rsquo;ll find
            everything you need to know about how to grill like a pro right here. From tips and
            tricks for never stressing out over your grilling plans to delicious recipes
            guaranteed to satisfy even the pickiest of taste buds, there&rsquo;s something for
            every weekend worrier at SmokehousePitBeef.
          </p>
        </div>

        <div className={styles.col}>
          <h4>Quick Links</h4>
          <ul>
            {QUICK_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Categories</h4>
          <ul>
            {footerCategories.map((c) => (
              <li key={c.slug}>
                <Link href={`/category/${c.slug}/`}>{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Latest Recipe</h4>
          {latest && (
            <Link href={`/recipe/${latest.frontmatter.slug}/`} className={styles.latestCard}>
              <Image
                src={latest.frontmatter.image}
                alt={latest.frontmatter.imageAlt ?? latest.frontmatter.title}
                width={300}
                height={300}
                className={styles.latestImage}
              />
              <span>{latest.frontmatter.title}</span>
            </Link>
          )}
        </div>
      </div>

      <div className={styles.bottom}>
        <p>
          Copyright &copy; {new Date().getFullYear()}. Smokehouse Pit Beef.{" "}
          <Link href="/terms-and-conditions/">Terms and Conditions</Link>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
