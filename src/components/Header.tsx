"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SocialIcon from "./SocialIcons";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about-us/", label: "About Us" },
  { href: "/contact-us/", label: "Contact Us" },
];

const RECIPE_CATEGORIES = [
  { slug: "beef", name: "Beef" },
  { slug: "chicken", name: "Chicken" },
  { slug: "pork", name: "Pork" },
  { slug: "sides", name: "Sides" },
  { slug: "smokersgrills", name: "Smokers & Grills" },
  { slug: "rubs", name: "Rubs" },
  { slug: "sauces", name: "Sauces" },
  { slug: "grilltips", name: "Grill Tips" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [recipesOpen, setRecipesOpen] = useState(false);

  return (
    <header
      data-elementor-type="header"
      data-elementor-id="589"
      className="elementor elementor-589 elementor-location-header"
    >
      <section className="elementor-section elementor-top-section elementor-element elementor-element-4f4ed4a elementor-hidden-mobile elementor-section-boxed elementor-section-height-default">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-49b5cdd">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-70c074a elementor-widget elementor-widget-text-editor">
                <div className="elementor-widget-container">
                  Free Shipping Within US on Order Total Over $60
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`elementor-section elementor-top-section elementor-element elementor-element-fd83f4e elementor-section-content-middle elementor-section-full_width elementor-section-height-default ${styles.stickyNav}`}
      >
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-1ad467e">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-ecc1174 elementor-align-left elementor-widget elementor-widget-button">
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <button
                      type="button"
                      className="elementor-button elementor-button-link elementor-size-sm"
                      aria-label="Open menu"
                      aria-expanded={menuOpen}
                      onClick={() => setMenuOpen(true)}
                    >
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-icon">
                          <svg
                            aria-hidden="true"
                            className="e-font-icon-svg e-fas-bars"
                            viewBox="0 0 448 512"
                            width="1em"
                            height="1em"
                          >
                            <path
                              fill="currentColor"
                              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                            />
                          </svg>
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-9560526">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-255f9cc elementor-widget elementor-widget-image">
                <div className="elementor-widget-container">
                  <Link href="/">
                    <Image
                      src="/images/brand/logo-black.webp"
                      alt="Smokehouse Pit Beef"
                      width={954}
                      height={105}
                      priority
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-89a089f">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-e2abad3 elementor-shape-circle e-grid-align-right elementor-grid-0 elementor-widget elementor-widget-social-icons">
                <div className="elementor-widget-container">
                  <div className="elementor-social-icons-wrapper elementor-grid" role="list">
                    <span className="elementor-grid-item" role="listitem">
                      <a
                        className="elementor-icon elementor-social-icon elementor-social-icon-facebook-f"
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="elementor-screen-only">Facebook-f</span>
                        <SocialIcon name="Facebook" />
                      </a>
                    </span>
                    <span className="elementor-grid-item" role="listitem">
                      <a
                        className="elementor-icon elementor-social-icon elementor-social-icon-twitter"
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="elementor-screen-only">Twitter</span>
                        <SocialIcon name="Twitter" />
                      </a>
                    </span>
                    <span className="elementor-grid-item" role="listitem">
                      <a
                        className="elementor-icon elementor-social-icon elementor-social-icon-instagram"
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="elementor-screen-only">Instagram</span>
                        <SocialIcon name="Instagram" />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile / hamburger nav — mirrors the original site's popup nav (elementor-833) */}
      <div
        data-elementor-type="popup"
        data-elementor-id="833"
        className={`elementor elementor-833 elementor-location-popup ${styles.popup} ${
          menuOpen ? styles.popupOpen : ""
        }`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className={styles.popupClose}
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        >
          &times;
        </button>
        <section className="elementor-section elementor-top-section elementor-element elementor-element-c40f19f elementor-section-boxed">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-0d078c5">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-88eed44 elementor-nav-menu__text-align-aside elementor-widget elementor-widget-nav-menu">
                  <div className="elementor-widget-container">
                    <nav className="elementor-nav-menu--dropdown elementor-nav-menu__container">
                      <ul className="elementor-nav-menu">
                        {NAV_LINKS.slice(0, 1).map((l) => (
                          <li key={l.href} className="menu-item">
                            <Link
                              href={l.href}
                              className="elementor-item"
                              onClick={() => setMenuOpen(false)}
                            >
                              {l.label}
                            </Link>
                          </li>
                        ))}
                        <li className="menu-item menu-item-has-children">
                          <button
                            type="button"
                            className={`elementor-item elementor-item-anchor ${styles.recipesToggle}`}
                            onClick={() => setRecipesOpen((v) => !v)}
                            aria-expanded={recipesOpen}
                          >
                            Recipes
                            <span className="sub-arrow">{recipesOpen ? "−" : "+"}</span>
                          </button>
                          {recipesOpen && (
                            <ul className="sub-menu elementor-nav-menu--dropdown">
                              {RECIPE_CATEGORIES.map((c) => (
                                <li key={c.slug} className="menu-item">
                                  <Link
                                    href={`/category/${c.slug}/`}
                                    className="elementor-sub-item"
                                    onClick={() => setMenuOpen(false)}
                                  >
                                    {c.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                        {NAV_LINKS.slice(1).map((l) => (
                          <li key={l.href} className="menu-item">
                            <Link
                              href={l.href}
                              className="elementor-item"
                              onClick={() => setMenuOpen(false)}
                            >
                              {l.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </div>

                <div className="elementor-element elementor-element-9216351 elementor-widget-divider--view-line elementor-widget elementor-widget-divider">
                  <div className="elementor-widget-container">
                    <div className="elementor-divider">
                      <span className="elementor-divider-separator" />
                    </div>
                  </div>
                </div>

                <div className="elementor-element elementor-element-22ad59a elementor-shape-circle e-grid-align-left elementor-grid-0 elementor-widget elementor-widget-social-icons">
                  <div className="elementor-widget-container">
                    <div className="elementor-social-icons-wrapper elementor-grid" role="list">
                      <span className="elementor-grid-item" role="listitem">
                        <a
                          className="elementor-icon elementor-social-icon elementor-social-icon-facebook-f"
                          href="https://www.facebook.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="elementor-screen-only">Facebook-f</span>
                          <SocialIcon name="Facebook" />
                        </a>
                      </span>
                      <span className="elementor-grid-item" role="listitem">
                        <a
                          className="elementor-icon elementor-social-icon elementor-social-icon-twitter"
                          href="https://twitter.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="elementor-screen-only">Twitter</span>
                          <SocialIcon name="Twitter" />
                        </a>
                      </span>
                      <span className="elementor-grid-item" role="listitem">
                        <a
                          className="elementor-icon elementor-social-icon elementor-social-icon-instagram"
                          href="https://www.instagram.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="elementor-screen-only">Instagram</span>
                          <SocialIcon name="Instagram" />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div
        className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ""}`}
        onClick={() => setMenuOpen(false)}
      />
    </header>
  );
}
