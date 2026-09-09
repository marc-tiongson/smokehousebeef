import Link from "next/link";
import Image from "next/image";
import { getRecipeBySlug } from "@/lib/content";
import styles from "./page.module.css";

const CATEGORY_TILES = [
  {
    slug: "beef",
    name: "Beef",
    icon: "/images/home/beef-white-1.webp",
    bg: "/images/home/tile-bg-beef.webp",
  },
  {
    slug: "chicken",
    name: "Chicken",
    icon: "/images/home/chicken-white-1.webp",
    bg: "/images/home/tile-bg-chicken.webp",
  },
  {
    slug: "pork",
    name: "Pork",
    icon: "/images/home/pork-white-1.webp",
    bg: "/images/home/tile-bg-pork.webp",
  },
  {
    slug: "sides",
    name: "Sides",
    icon: "/images/home/sides-white-1.webp",
    bg: "/images/home/tile-bg-sides.webp",
  },
  {
    slug: "smokersgrills",
    name: "Smokers & Grills",
    icon: "/images/home/smokers-grills-white-1.webp",
    bg: "/images/home/tile-bg-smokersgrills.webp",
  },
  {
    slug: "rubs",
    name: "Rubs",
    icon: "/images/home/rubs-white-1.webp",
    bg: "/images/home/tile-bg-rubs.webp",
  },
  {
    slug: "sauces",
    name: "Sauces",
    icon: "/images/home/sauces-white-1.webp",
    bg: "/images/home/tile-bg-sauces.webp",
  },
  {
    slug: "grilltips",
    name: "Grill Tips",
    icon: "/images/home/grill-tips-white-1.webp",
    bg: "/images/home/tile-bg-grilltips.webp",
  },
];

const SEASONAL_FAVORITES = [
  {
    slug: "naan-baked-flat-bread",
    badge: "Sides",
    excerpt: "The first food cooked in an Indian oven was flatbreads, and for me, they remain",
  },
  {
    slug: "coleslaw-north-carolina-style",
    badge: "Sides",
    excerpt: "Coleslaw is a dish that is commonly served alongside barbecue meats. It is easy to",
  },
  {
    slug: "grilling-vs-bbqing",
    badge: "Grill Tips",
    excerpt: "There are times when we will assume that bbq and grill are pretty much the",
  },
];

const FREE_REPORTS = [
  { href: "/drum-smoker-vs-offset-smoker/", label: "Drum Smoker Vs Offset Smoker" },
  {
    href: "/gateway-drum-smoker-vs-pit-barrel-cooker/",
    label: "Gateway Drum Smoker vs Pit Barrel Cooker",
  },
  {
    href: "/grill-vs-barbeque-the-essential-guide/",
    label: "Grill Vs Barbeque: The Essential Guide",
  },
  { href: "/how-to-build-a-bbq-pit/", label: "How To Build A BBQ Pit" },
  {
    href: "/the-best-drum-smoker-kits-for-bbq-the-top-10-reviewed/",
    label: "The Best Drum Smoker Kits For BBQ: The Top 10 Reviewed",
  },
  { href: "/the-top-ten-bbq-smokers-under-300/", label: "The Top Ten BBQ Smokers Under $300" },
  { href: "/top-10-best-bbq-drum-smokers/", label: "Top 10 Best BBQ Drum Smokers" },
  {
    href: "/top-15-smokers-for-bbq-cooking-with-prices/",
    label: "Top 15 Smokers For BBQ Cooking With Prices",
  },
  {
    href: "/top-meats-to-smoke-with-cooking-tips/",
    label: "Top Meats To Smoke With Cooking Tips",
  },
];

function FlipTile({
  slug,
  name,
  icon,
  bg,
}: {
  slug: string;
  name: string;
  icon: string;
  bg: string;
}) {
  return (
    <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element">
      <div className="elementor-widget-wrap elementor-element-populated">
        <Link href={`/category/${slug}/`} className={styles.tile}>
          <Image src={bg} alt="" width={345} height={312} className={styles.tileBg} />
          <div className={styles.tileOverlay}>
            <Image src={icon} alt={name} width={70} height={70} className={styles.tileIcon} />
          </div>
        </Link>
        <div className="elementor-element elementor-widget elementor-widget-heading">
          <div className="elementor-widget-container">
            <h4 className={`elementor-heading-title elementor-size-default ${styles.tileLabel}`}>
              {name}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div
      data-elementor-type="wp-page"
      data-elementor-id="1739"
      className="elementor elementor-1739"
    >
      <section className="elementor-section elementor-top-section elementor-element elementor-element-d55a0c7 elementor-section-boxed elementor-section-height-default">
        <div className="elementor-container elementor-column-gap-wider">
          <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-128fb67">
            <div className="elementor-widget-wrap elementor-element-populated">
              <section className="elementor-section elementor-inner-section elementor-element elementor-element-7e3bfb7 elementor-section-boxed elementor-section-height-default">
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-5f5efea">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-widget elementor-widget-heading">
                        <div className="elementor-widget-container">
                          <h2 className="elementor-heading-title elementor-size-default">
                            Browse BBQ Recipes &amp; Tips
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="elementor-section elementor-inner-section elementor-element elementor-element-e1881ae elementor-section-boxed elementor-section-height-default">
                <div className="elementor-container elementor-column-gap-default">
                  {CATEGORY_TILES.slice(0, 4).map((c) => (
                    <FlipTile key={c.slug} {...c} />
                  ))}
                </div>
              </section>
              <section className="elementor-section elementor-inner-section elementor-element elementor-element-10a2cc6 elementor-section-boxed elementor-section-height-default">
                <div className="elementor-container elementor-column-gap-default">
                  {CATEGORY_TILES.slice(4, 8).map((c) => (
                    <FlipTile key={c.slug} {...c} />
                  ))}
                </div>
              </section>

              <section className="elementor-section elementor-inner-section elementor-element elementor-element-ff10aba elementor-section-content-middle elementor-section-boxed elementor-section-height-default">
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-38714bc">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-widget elementor-widget-heading">
                        <div className="elementor-widget-container">
                          <h3 className="elementor-heading-title elementor-size-default">
                            Welcome to Smoke House Pit Beef
                          </h3>
                        </div>
                      </div>
                      <div className="elementor-element elementor-widget elementor-widget-text-editor">
                        <div className="elementor-widget-container">
                          The go-to destination for BBQ and grilling enthusiasts everywhere!
                          Whether you&rsquo;re an armchair griller or a seasoned barbeque nerd,
                          you&rsquo;ll find everything you need to know about how to grill like a
                          pro right here. From tips and tricks for never stressing out over your
                          grilling plans to delicious recipes guaranteed to satisfy even the
                          pickiest of taste buds, there&rsquo;s something for every weekend
                          warrior at SmokehousePitBeef. So what are you waiting for? Fire up that
                          smoker or gas grill, and start making some memories with your friends
                          and family today!
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-142ac7e">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-widget elementor-widget-image">
                        <div className="elementor-widget-container">
                          <Image
                            src="/images/home/welcome-brisket.webp"
                            alt="Smoked brisket with coffee rub"
                            width={900}
                            height={900}
                          />
                        </div>
                      </div>
                      <div className="elementor-element elementor-align-center elementor-widget elementor-widget-button">
                        <div className="elementor-widget-container">
                          <div className="elementor-button-wrapper">
                            <Link
                              className="elementor-button elementor-button-link elementor-size-md"
                              href="/about-us/"
                            >
                              <span className="elementor-button-content-wrapper">
                                <span className="elementor-button-text">Learn More</span>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="elementor-section elementor-inner-section elementor-element elementor-element-7c904e7 elementor-section-boxed elementor-section-height-default">
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-3b8e516">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-widget elementor-widget-heading">
                        <div className="elementor-widget-container">
                          <h2 className="elementor-heading-title elementor-size-default">
                            Seasonal Favorites
                          </h2>
                        </div>
                      </div>
                      <div className="elementor-element elementor-widget elementor-widget-text-editor">
                        <div className="elementor-widget-container">
                          A few of our favorite recipes, stories, and tips that celebrate the
                          season.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <div className="elementor-element elementor-grid-3 elementor-grid-tablet-2 elementor-grid-mobile-1 elementor-posts--thumbnail-top elementor-card-shadow-yes elementor-widget elementor-widget-posts">
                <div className="elementor-widget-container">
                  <div
                    className="elementor-posts-container elementor-posts elementor-posts--skin-cards elementor-grid"
                    role="list"
                  >
                    {SEASONAL_FAVORITES.map((f) => {
                      const recipe = getRecipeBySlug(f.slug);
                      if (!recipe) return null;
                      return (
                        <article key={f.slug} className="elementor-post elementor-grid-item" role="listitem">
                          <div className="elementor-post__card">
                            <Link
                              className="elementor-post__thumbnail__link"
                              href={`/recipe/${f.slug}/`}
                              tabIndex={-1}
                            >
                              <div className="elementor-post__thumbnail">
                                <Image
                                  src={recipe.frontmatter.image}
                                  alt=""
                                  width={900}
                                  height={900}
                                />
                              </div>
                            </Link>
                            <div className="elementor-post__badge">{f.badge}</div>
                            <div className="elementor-post__text">
                              <h4 className="elementor-post__title">
                                <Link href={`/recipe/${f.slug}/`}>{recipe.frontmatter.title}</Link>
                              </h4>
                              <div className="elementor-post__excerpt">
                                <p>{f.excerpt}</p>
                              </div>
                              <Link
                                className="elementor-post__read-more"
                                href={`/recipe/${f.slug}/`}
                                tabIndex={-1}
                              >
                                Read More »
                              </Link>
                            </div>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-f7c4036">
            <div className="elementor-widget-wrap elementor-element-populated">
              <section className="elementor-section elementor-inner-section elementor-element elementor-element-1a0bed2 elementor-section-boxed elementor-section-height-default">
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-0253f78">
                    <div className={`elementor-widget-wrap elementor-element-populated ${styles.sidebarBoxWrap}`}>
                      <Image
                        src="/images/home/sidebar-bg-guide.webp"
                        alt=""
                        width={400}
                        height={600}
                        className={styles.sidebarBoxBg}
                      />
                      <div className={styles.sidebarBoxOverlay} />
                      <div className={styles.sidebarBoxContent}>
                      <div className="elementor-element elementor-widget elementor-widget-heading">
                        <div className={`elementor-widget-container ${styles.sidebarHeadingBar}`}>
                          <h4 className="elementor-heading-title elementor-size-default">
                            Download Your Free Meat Smoking Guide
                          </h4>
                        </div>
                      </div>
                      <div className={styles.guideWidget}>
                        <div className="content">
                          <p className={styles.guideIntro}>
                            <strong>Enter your Name and Email Below </strong>
                            <br />
                            <strong>For Instant Access</strong>
                          </p>
                        </div>
                        <div className="bullets">
                          <ul>
                            <li>Free Downloads</li>
                            <li>Popular recipes &amp; BBQ Secrets</li>
                            <li>BBQ Smoker &amp; Grill Reviews</li>
                          </ul>
                        </div>
                        <form
                          method="POST"
                          action="https://www.aweber.com/scripts/addlead.pl"
                          target="_new"
                          className={styles.aweberForm}
                        >
                          <input type="hidden" name="meta_web_form_id" value="1256636276" />
                          <input type="hidden" name="meta_split_id" value="" />
                          <input type="hidden" name="listname" value="awlist6278857" />
                          <input
                            type="hidden"
                            name="redirect"
                            value="/thank-you-for-subscribing/"
                          />
                          <input
                            type="hidden"
                            name="meta_redirect_onlist"
                            value="/thank-you-for-subscribing/"
                          />
                          <input type="hidden" name="meta_adtracking" value="My_Web_Form" />
                          <input type="hidden" name="meta_message" value="1" />
                          <input type="hidden" name="meta_required" value="name,email" />
                          <input type="hidden" name="meta_forward_vars" value="" />
                          <div className="optin">
                            <div className={styles.guideHeadline}>Fill in the form Below:</div>
                            <div style={{ textAlign: "center" }}>
                              <input type="text" name="name" placeholder="Enter name..." />
                              <br />
                              <input
                                type="text"
                                name="email"
                                placeholder="Enter email address..."
                              />
                              <button type="submit" className={styles.guideSubmit}>
                                Download Now
                              </button>
                            </div>
                          </div>
                          <div className={styles.guidePrivacy}>
                            <a
                              href="http://www.aweber.com/permission.html"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Privacy
                            </a>
                          </div>
                        </form>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="elementor-section elementor-inner-section elementor-element elementor-element-0b86273 elementor-section-boxed elementor-section-height-default">
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-30994a1">
                    <div className={`elementor-widget-wrap elementor-element-populated ${styles.sidebarBoxWrap}`}>
                      <Image
                        src="/images/home/sidebar-bg-reports.webp"
                        alt=""
                        width={400}
                        height={700}
                        className={styles.sidebarBoxBg}
                      />
                      <div className={`${styles.sidebarBoxOverlay} ${styles.sidebarBoxOverlayStrong}`} />
                      <div className={styles.sidebarBoxContent}>
                      <div className="elementor-element elementor-widget elementor-widget-heading">
                        <div className={`elementor-widget-container ${styles.sidebarHeadingBar}`}>
                          <h4 className="elementor-heading-title elementor-size-default">
                            Free Reports
                          </h4>
                        </div>
                      </div>
                      <div className="elementor-element elementor-nav-menu__text-align-aside elementor-widget elementor-widget-nav-menu">
                        <div className={`elementor-widget-container ${styles.sidebarLinks}`}>
                          <nav className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-vertical">
                            <ul className="elementor-nav-menu">
                              {FREE_REPORTS.map((r) => (
                                <li key={r.href} className="menu-item">
                                  <Link href={r.href} className="elementor-item">
                                    {r.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </nav>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
