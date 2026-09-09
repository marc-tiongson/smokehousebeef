import Link from "next/link";
import type { Metadata } from "next";
import AWeberOptInForm from "@/components/AWeberOptInForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "The Best Smokers Reviewed | Smokehouse Pit Beef",
  description: "Download your free guide to the best smoked meats.",
};

const BENEFITS = [
  "The Best Drum Smokers",
  "The Difference In Grilling & BBQing",
  "Homemade BBQ Pits",
];

const FREE_REPORTS = [
  { href: "/top-10-best-bbq-drum-smokers/", label: "Top 10 Best BBQ Drum Smokers" },
  {
    href: "/the-best-drum-smoker-kits-for-bbq-the-top-10-reviewed/",
    label: "The Best Drum Smoker Kits For BBQ: The Top 10 Reviewed",
  },
  { href: "/drum-smoker-vs-offset-smoker/", label: "Drum Smoker Vs Offset Smoker" },
  {
    href: "/gateway-drum-smoker-vs-pit-barrel-cooker/",
    label: "Gateway Drum Smoker vs Pit Barrel Cooker",
  },
  {
    href: "/grill-vs-barbeque-the-essential-guide/",
    label: "Grill Vs Barbeque: The Essential Guide",
  },
  { href: "/recipe/grilling-vs-bbqing/", label: "Grilling vs BBQing" },
  { href: "/how-to-build-a-bbq-pit/", label: "How To Build A BBQ Pit" },
  {
    href: "/top-15-smokers-for-bbq-cooking-with-prices/",
    label: "Top 15 Smokers For BBQ Cooking With Prices",
  },
  { href: "/top-meats-to-smoke-with-cooking-tips/", label: "Top Meats To Smoke With Cooking Tips" },
  { href: "/the-top-ten-bbq-smokers-under-300/", label: "The Top Ten BBQ Smokers Under $300" },
];

export default function SamplePage() {
  return (
    <div className={`${styles.wrap} container`}>
      <h1 className={styles.title}>The Best Smokers Reviewed</h1>

      <div className={styles.hero}>
        <p className={styles.headline}>Download Your Guide To The Best Smoked Meats</p>
        <div className={styles.placeholder}>Guide preview image</div>
      </div>

      <div className={styles.formSection}>
        <AWeberOptInForm heading="Free Smoked Meats Guide" benefits={BENEFITS} />
      </div>

      <div className={styles.reports}>
        <h2>Free Reports</h2>
        <ul className={styles.reportsList}>
          {FREE_REPORTS.map((r) => (
            <li key={r.href}>
              <Link href={r.href}>{r.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
