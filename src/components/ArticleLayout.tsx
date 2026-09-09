import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import styles from "./ArticleLayout.module.css";

const SIDEBAR_CATEGORIES = [
  { slug: "beef", name: "Beef" },
  { slug: "grilltips", name: "Grill Tips" },
  { slug: "pork", name: "Pork" },
  { slug: "sauces", name: "Sauces" },
  { slug: "rubs", name: "Rubs" },
  { slug: "smokersgrills", name: "Smokers & Grills" },
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
  return (
    <div data-elementor-type="single-post" data-elementor-id="1275" className="elementor elementor-1275 elementor-location-single">
      <section className="elementor-section elementor-top-section elementor-element elementor-element-a868199 elementor-section-content-middle elementor-section-boxed elementor-section-height-default">
        <div className="elementor-container elementor-column-gap-no">
          <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-80105a0">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-widget elementor-widget-heading">
                <div className="elementor-widget-container">
                  <h1 className="elementor-heading-title elementor-size-default">{title}</h1>
                </div>
              </div>
              {(date || categoryName) && (
                <div className="elementor-element elementor-align-center elementor-widget elementor-widget-post-info">
                  <div className="elementor-widget-container">
                    <ul className="elementor-inline-items elementor-icon-list-items elementor-post-info">
                      {date && (
                        <li className="elementor-icon-list-item elementor-inline-item">
                          <span className="elementor-icon-list-icon">
                            <svg
                              aria-hidden="true"
                              viewBox="0 0 448 512"
                              width="1em"
                              height="1em"
                            >
                              <path
                                fill="currentColor"
                                d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"
                              />
                            </svg>
                          </span>
                          <span className="elementor-icon-list-text elementor-post-info__item elementor-post-info__item--type-date">
                            <time dateTime={date}>
                              {new Date(date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </time>
                          </span>
                        </li>
                      )}
                      {categoryName && categorySlug && (
                        <li className="elementor-icon-list-item elementor-inline-item">
                          <span className="elementor-icon-list-icon">
                            <svg
                              aria-hidden="true"
                              viewBox="0 0 640 512"
                              width="1em"
                              height="1em"
                            >
                              <path
                                fill="currentColor"
                                d="M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882z"
                              />
                            </svg>
                          </span>
                          <span className="elementor-icon-list-text elementor-post-info__item elementor-post-info__item--type-terms">
                            <span className="elementor-post-info__terms-list">
                              <Link
                                href={`/category/${categorySlug}/`}
                                className="elementor-post-info__terms-list-item"
                              >
                                {categoryName}
                              </Link>
                            </span>
                          </span>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>

          {image && (
            <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-0d2a35d">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-widget elementor-widget-image">
                  <div className="elementor-widget-container">
                    <Image src={image} alt={imageAlt ?? title} width={900} height={900} priority />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="elementor-section elementor-top-section elementor-element elementor-element-dbf75ec elementor-section-boxed elementor-section-height-default">
        <div className="elementor-container elementor-column-gap-wider">
          <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-af15144">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-widget elementor-widget-theme-post-content">
                <div className={`elementor-widget-container ${styles.body}`}>
                  <MDXRemote source={body} />
                </div>
              </div>
            </div>
          </div>

          <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-aff5758">
            <div className="elementor-widget-wrap elementor-element-populated">
              <section className="elementor-section elementor-inner-section elementor-element elementor-element-e59745f elementor-section-boxed elementor-section-height-default">
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-fa2e8a1">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-widget elementor-widget-heading">
                        <div className="elementor-widget-container">
                          <h4 className="elementor-heading-title elementor-size-default">Recipes</h4>
                        </div>
                      </div>
                      <div className="elementor-element elementor-nav-menu__text-align-aside elementor-widget elementor-widget-nav-menu">
                        <div className="elementor-widget-container">
                          <nav className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-vertical">
                            <ul className="elementor-nav-menu">
                              {SIDEBAR_CATEGORIES.map((c) => (
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

                      <div className={styles.sidebarSpacer} />

                      <div className="elementor-element elementor-widget elementor-widget-heading">
                        <div className="elementor-widget-container">
                          <h4 className="elementor-heading-title elementor-size-default">
                            Free Reports
                          </h4>
                        </div>
                      </div>
                      <div className="elementor-element elementor-nav-menu__text-align-aside elementor-widget elementor-widget-nav-menu">
                        <div className="elementor-widget-container">
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
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
