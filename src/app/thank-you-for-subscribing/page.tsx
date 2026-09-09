import Link from "next/link";
import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Thank You for Subscribing | Smokehouse Pit Beef",
  description: "Thanks for subscribing to Smokehouse Pit Beef.",
};

export default function ThankYouForSubscribingPage() {
  return (
    <div className={`${styles.wrap} container`}>
      <h1 className={styles.title}>Thank You for Subscribing</h1>
      <p className={styles.lead}>
        In just a few minutes you will get an email from me with directions on how to download
        your free Smoked Meat Guide.
      </p>
      <p className={styles.spam}>If you do not see an email, please check your SPAM folder!</p>

      <div className={styles.body}>
        <p>
          The email will be from <strong>Pit Boss</strong> &ndash; that&rsquo;s me 🙂
        </p>
        <p>
          You can even whitelist this email to be sure you get all my messages with cool tips,
          videos, and downloads so that you can grill to your heart&rsquo;s desire. I look forward to
          providing killer info for you over the next few weeks.
        </p>
        <p>
          <strong>While You Are Waiting&hellip; Check Out These Killer Resources on our Site&hellip;</strong>
        </p>
        <ul>
          <li>
            <Link href="/grill-vs-barbeque-the-essential-guide/">Grill vs Barbeque: The Essential Guide</Link>
          </li>
          <li>
            <Link href="/recipe/choosing-your-first-outdoor-barbeque-grill/">
              Choosing Your First Outdoor Barbeque Grill
            </Link>
          </li>
          <li>
            <Link href="/recipe/barbeque-grill-maintenance-tips/">Barbeque Grill Maintenance Tips</Link>
          </li>
        </ul>
        <p>
          Thank You And I Hope You Enjoy it!
          <br />
          Simon
        </p>
      </div>
    </div>
  );
}
