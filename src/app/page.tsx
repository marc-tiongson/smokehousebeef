import Link from "next/link";
import Image from "next/image";
import OptInForm from "@/components/OptInForm";
import { getRecipeBySlug } from "@/lib/content";
import styles from "./page.module.css";

const CATEGORY_TILES = [
  { slug: "beef", name: "Beef", image: "/images/home/beef-white-1.webp" },
  { slug: "chicken", name: "Chicken", image: "/images/home/chicken-white-1.webp" },
  { slug: "pork", name: "Pork", image: "/images/home/pork-white-1.webp" },
  { slug: "sides", name: "Sides", image: "/images/home/sides-white-1.webp" },
  {
    slug: "smokersgrills",
    name: "Smokers & Grills",
    image: "/images/home/smokers-grills-white-1.webp",
  },
  { slug: "rubs", name: "Rubs", image: "/images/home/rubs-white-1.webp" },
  { slug: "sauces", name: "Sauces", image: "/images/home/sauces-white-1.webp" },
  { slug: "grilltips", name: "Grill Tips", image: "/images/home/grill-tips-white-1.webp" },
];

const SEASONAL_FAVORITES = [
  {
    slug: "naan-baked-flat-bread",
    badge: "Sides",
    excerpt:
      "The first food cooked in an Indian oven was flatbreads, and for me, they remain the perfect side for any smoked meat.",
  },
  {
    slug: "coleslaw-north-carolina-style",
    badge: "Sides",
    excerpt:
      "Coleslaw is a dish that is commonly served alongside barbecue meats. It is easy to make and always a crowd pleaser.",
  },
  {
    slug: "grilling-vs-bbqing",
    badge: "Grill Tips",
    excerpt:
      "There are times when we will assume that bbq and grill are pretty much the same thing, but they're not.",
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

export default function HomePage() {
  return (
    <>
      <section className={`${styles.section} container`}>
        <h2 className={styles.sectionTitle}>Browse BBQ Recipes &amp; Tips</h2>
        <div className={styles.tileGrid}>
          {CATEGORY_TILES.map((c) => (
            <Link key={c.slug} href={`/category/${c.slug}/`} className={styles.tile}>
              <Image src={c.image} alt={c.name} width={345} height={312} className={styles.tileImage} />
              <span>{c.name}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className={`${styles.welcome} container`}>
        <div>
          <h3 className={styles.welcomeTitle}>Welcome to Smoke House Pit Beef</h3>
          <p className={styles.welcomeText}>
            The go-to destination for BBQ and grilling enthusiasts everywhere! Whether you&rsquo;re
            an armchair griller or a seasoned barbeque nerd, you&rsquo;ll find everything you need to
            know about how to grill like a pro right here. From tips and tricks for never stressing
            out over your grilling plans to delicious recipes guaranteed to satisfy even the pickiest
            of taste buds, there&rsquo;s something for every weekend warrior at SmokehousePitBeef. So
            what are you waiting for? Fire up that smoker or gas grill, and start making some
            memories with your friends and family today!
          </p>
          <Link href="/about-us/" className={styles.learnMore}>
            Learn More
          </Link>
        </div>
        <Image
          src="/images/home/welcome-brisket.webp"
          alt="Smoked brisket with coffee rub"
          width={900}
          height={900}
          className={styles.welcomeImage}
        />
      </section>

      <section className={`${styles.section} container`}>
        <div className={styles.favoritesGrid}>
          <div>
            <h2 className={styles.sectionTitle}>Seasonal Favorites</h2>
            <p className={styles.sectionSubtitle}>
              A few of our favorite recipes, stories, and tips that celebrate the season.
            </p>
            <div className={styles.favoritesCards}>
              {SEASONAL_FAVORITES.map((f) => {
                const recipe = getRecipeBySlug(f.slug);
                if (!recipe) return null;
                return (
                  <article key={f.slug} className={styles.favoriteCard}>
                    <Link href={`/recipe/${f.slug}/`}>
                      <Image
                        src={recipe.frontmatter.image}
                        alt={recipe.frontmatter.imageAlt ?? recipe.frontmatter.title}
                        width={400}
                        height={400}
                      />
                    </Link>
                    <div className={styles.favoriteBadge}>{f.badge}</div>
                    <h4>
                      <Link href={`/recipe/${f.slug}/`}>{recipe.frontmatter.title}</Link>
                    </h4>
                    <p>{f.excerpt}</p>
                    <Link href={`/recipe/${f.slug}/`} className={styles.readMore}>
                      Read More »
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>

          <div className={styles.guideBox}>
            <h4>Download Your Free Meat Smoking Guide</h4>
            <p>Enter your Name and Email Below For Instant Access</p>
            <ul className={styles.checklist}>
              <li>Free Downloads</li>
              <li>Popular recipes &amp; BBQ Secrets</li>
              <li>BBQ Smoker &amp; Grill Reviews</li>
            </ul>
            <form
              method="POST"
              action="https://www.aweber.com/scripts/addlead.pl"
              target="_new"
              className={styles.aweberForm}
            >
              <input type="hidden" name="meta_web_form_id" value="1256636276" />
              <input type="hidden" name="meta_split_id" value="" />
              <input type="hidden" name="listname" value="awlist6278857" />
              <input type="hidden" name="redirect" value="/thank-you-for-subscribing/" />
              <input type="hidden" name="meta_redirect_onlist" value="/thank-you-for-subscribing/" />
              <input type="hidden" name="meta_adtracking" value="My_Web_Form" />
              <input type="hidden" name="meta_message" value="1" />
              <input type="hidden" name="meta_required" value="name,email" />
              <input type="hidden" name="meta_forward_vars" value="" />
              <label htmlFor="home-optin-name" className={styles.srOnly}>
                Name
              </label>
              <input id="home-optin-name" type="text" name="name" placeholder="Enter name..." />
              <label htmlFor="home-optin-email" className={styles.srOnly}>
                Email
              </label>
              <input id="home-optin-email" type="text" name="email" placeholder="Enter email address..." />
              <button type="submit">Download Now</button>
              <p className={styles.privacyNote}>
                <a href="http://www.aweber.com/permission.html" target="_blank" rel="noopener noreferrer">
                  Privacy
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className={`${styles.section} container`}>
        <h4 className={styles.reportsTitle}>Free Reports</h4>
        <ul className={styles.reportsList}>
          {FREE_REPORTS.map((r) => (
            <li key={r.href}>
              <Link href={r.href}>{r.label}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section className={`${styles.section} container`}>
        <h2 className={styles.sectionTitle}>Free Smoked Meats Guide</h2>
        <ul className={styles.iconChecklist}>
          <li>The Best Drum Smokers</li>
          <li>The Difference In Grilling &amp; BBQing</li>
          <li>Homemade BBQ Pits</li>
        </ul>
        <OptInForm />
      </section>
    </>
  );
}
