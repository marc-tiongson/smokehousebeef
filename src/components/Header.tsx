"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import categories from "../../content/categories.json";
import SocialIcon from "./SocialIcons";
import styles from "./Header.module.css";

const SOCIAL_LINKS = [
  { name: "Facebook", href: "https://www.facebook.com/" },
  { name: "Twitter", href: "https://twitter.com/" },
  { name: "Instagram", href: "https://www.instagram.com/" },
] as const;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [recipesOpen, setRecipesOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.announcement}>
        Free Shipping Within US on Order Total Over $60
      </div>

      <div className={styles.navRow}>
        <div className={styles.navInner}>
          <button
            type="button"
            className={styles.menuButton}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <svg viewBox="0 0 448 512" width="20" height="20" aria-hidden="true">
              <path
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              />
            </svg>
          </button>

          <Link href="/" className={styles.logoLink}>
            <Image
              src="/images/brand/logo-black.webp"
              alt="Smokehouse Pit Beef"
              width={954}
              height={105}
              className={styles.logo}
              priority
            />
          </Link>

          <div className={styles.socialIcons}>
            {SOCIAL_LINKS.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name}>
                <SocialIcon name={s.name} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`${styles.drawerOverlay} ${menuOpen ? styles.drawerOverlayOpen : ""}`}
        onClick={() => setMenuOpen(false)}
      />
      <nav className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ""}`} aria-hidden={!menuOpen}>
        <button
          type="button"
          className={styles.closeButton}
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        >
          &times;
        </button>

        <ul className={styles.drawerList}>
          <li>
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <button
              type="button"
              className={styles.recipesToggle}
              onClick={() => setRecipesOpen((v) => !v)}
              aria-expanded={recipesOpen}
            >
              Recipes
              <span className={styles.plus}>{recipesOpen ? "−" : "+"}</span>
            </button>
            {recipesOpen && (
              <ul className={styles.subList}>
                {categories.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/category/${c.slug}/`} onClick={() => setMenuOpen(false)}>
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <Link href="/about-us/" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact-us/" onClick={() => setMenuOpen(false)}>
              Contact Us
            </Link>
          </li>
        </ul>

        <div className={styles.drawerSocial}>
          {SOCIAL_LINKS.map((s) => (
            <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name}>
              <span className={styles.socialDot} />
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
