import Link from "next/link";
import Image from "next/image";
import { getLatestRecipe } from "@/lib/content";

const QUICK_LINKS = [
  { href: "/about-us/", label: "About Us" },
  { href: "/contact-us/", label: "Contact Us" },
  { href: "/privacy-policy/", label: "Privacy Policy" },
];

const FOOTER_CATEGORIES = [
  { slug: "beef", name: "Beef" },
  { slug: "grilltips", name: "Grill Tips" },
  { slug: "pork", name: "Pork" },
  { slug: "sauces", name: "Sauces" },
  { slug: "rubs", name: "Rubs" },
  { slug: "smokersgrills", name: "Smokers & Grills" },
];

export default function Footer() {
  const latest = getLatestRecipe();

  return (
    <footer
      data-elementor-type="footer"
      data-elementor-id="578"
      className="elementor elementor-578 elementor-location-footer"
    >
      <section className="elementor-section elementor-top-section elementor-element elementor-element-db787ae elementor-section-boxed elementor-section-height-default">
        <div className="elementor-container elementor-column-gap-wider">
          <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-f106bda">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-8747eeb elementor-widget elementor-widget-image">
                <div className="elementor-widget-container">
                  <Image
                    src="/images/brand/logo-white.png"
                    alt="Smokehouse Pit Beef"
                    width={954}
                    height={105}
                  />
                </div>
              </div>
              <div className="elementor-element elementor-element-0365425 elementor-widget elementor-widget-text-editor">
                <div className="elementor-widget-container">
                  The go-to destination for BBQ and grilling enthusiasts everywhere! Whether
                  you&rsquo;re an armchair griller or a seasoned barbeque nerd, you&rsquo;ll find
                  everything you need to know about how to grill like a pro right here. From tips
                  and tricks for never stressing out over your grilling plans to delicious recipes
                  guaranteed to satisfy even the pickiest of taste buds, there&rsquo;s something
                  for every weekend worrier at SmokehousePitBeef.
                </div>
              </div>
            </div>
          </div>

          <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-81dbb88">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-c392792 elementor-widget elementor-widget-heading">
                <div className="elementor-widget-container">
                  <h4 className="elementor-heading-title elementor-size-default">Quick Links</h4>
                </div>
              </div>
              <div className="elementor-element elementor-element-3b4e13d elementor-nav-menu__text-align-aside elementor-widget elementor-widget-nav-menu">
                <div className="elementor-widget-container">
                  <nav className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-vertical">
                    <ul className="elementor-nav-menu">
                      {QUICK_LINKS.map((l) => (
                        <li key={l.href} className="menu-item">
                          <Link href={l.href} className="elementor-item">
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-9f2f3a0">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-bf1c067 elementor-widget elementor-widget-heading">
                <div className="elementor-widget-container">
                  <h4 className="elementor-heading-title elementor-size-default">Categories</h4>
                </div>
              </div>
              <div className="elementor-element elementor-element-a894ace elementor-nav-menu__text-align-aside elementor-widget elementor-widget-nav-menu">
                <div className="elementor-widget-container">
                  <nav className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-vertical">
                    <ul className="elementor-nav-menu">
                      {FOOTER_CATEGORIES.map((c) => (
                        <li key={c.slug} className="menu-item">
                          <Link href={`/category/${c.slug}/`} className="elementor-item">
                            {c.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-973f915">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-f149b36 elementor-widget elementor-widget-heading">
                <div className="elementor-widget-container">
                  <h4 className="elementor-heading-title elementor-size-default">Latest Recipe</h4>
                </div>
              </div>
              {latest && (
                <div className="elementor-element elementor-element-6a24754 elementor-grid-1 elementor-posts--align-center elementor-posts--thumbnail-top elementor-widget elementor-widget-posts">
                  <div className="elementor-widget-container">
                    <div className="elementor-posts-container elementor-posts elementor-posts--skin-classic elementor-grid" role="list">
                      <article className="elementor-post elementor-grid-item" role="listitem">
                        <Link
                          className="elementor-post__thumbnail__link"
                          href={`/recipe/${latest.frontmatter.slug}/`}
                          tabIndex={-1}
                        >
                          <div className="elementor-post__thumbnail">
                            <Image
                              src={latest.frontmatter.image}
                              alt=""
                              width={900}
                              height={900}
                            />
                          </div>
                        </Link>
                        <div className="elementor-post__text">
                          <h3 className="elementor-post__title">
                            <Link href={`/recipe/${latest.frontmatter.slug}/`}>
                              {latest.frontmatter.title}
                            </Link>
                          </h3>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="elementor-section elementor-top-section elementor-element elementor-element-a7e6678 elementor-section-boxed elementor-section-height-default">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2e51922">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-c46133f elementor-widget-divider--view-line elementor-widget elementor-widget-divider">
                <div className="elementor-widget-container">
                  <div className="elementor-divider">
                    <span className="elementor-divider-separator" />
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-f254bd9 elementor-widget elementor-widget-text-editor">
                <div className="elementor-widget-container">
                  <p>
                    Copyright &copy; {new Date().getFullYear()}. Smokehouse Pit Beef.{" "}
                    <Link href="/terms-and-conditions/" style={{ fontSize: 12 }}>
                      Terms and Conditions
                    </Link>
                    . All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
