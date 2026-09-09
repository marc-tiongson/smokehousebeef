import Image from "next/image";
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import OptInForm from "@/components/OptInForm";
import SocialIcon from "@/components/SocialIcons";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact Us | Smokehouse Pit Beef",
  description: "Have some feedback or a question? Get in touch with Smokehouse Pit Beef.",
};

const SOCIAL_LINKS = [
  { name: "Facebook", href: "https://www.facebook.com/" },
  { name: "Twitter", href: "https://twitter.com/" },
  { name: "Instagram", href: "https://www.instagram.com/" },
] as const;

export default function ContactUsPage() {
  return (
    <div>
      <div className={`${styles.wrap} container`}>
        <div className={styles.hero}>
          <Image src="/images/contact/hero-bg.webp" alt="" fill className={styles.heroBg} />
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <h1>We Would Love To Hear From You</h1>
            <p>Have some feedback or a question? Fill out the form, and we&rsquo;ll get back to you ASAP.</p>
            <div className={styles.heroSocial}>
              {SOCIAL_LINKS.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name}>
                  <SocialIcon name={s.name} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.formCard}>
          <h2>Contact Us</h2>
          <ContactForm />
        </div>
      </div>

      <div className={`${styles.optinSection} container`}>
        <div className={styles.optinCard}>
          <OptInForm showHeading />
        </div>
      </div>
    </div>
  );
}
