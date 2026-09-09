import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Get Your Free Meat Smoking Guide | Smokehouse Pit Beef",
  description: "Get your free Meat Smoking Guide here.",
};

export default function ThankYouSmokedMeatGuidePage() {
  return (
    <div className={`${styles.wrap} container`}>
      <h1 className={styles.title}>
        Get Your Free
        <span>Meat Smoking Guide</span>
        Here
      </h1>
      <p className={styles.lead}>
        Thanks for requesting the guide! Keep an eye on your inbox &mdash; we&rsquo;re sending it
        over now, and if you don&rsquo;t see it in a few minutes, be sure to check your spam
        folder.
      </p>
    </div>
  );
}
