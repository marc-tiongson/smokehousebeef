import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import OptInForm from "@/components/OptInForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact Us | Smokehouse Pit Beef",
  description: "Have some feedback or a question? Get in touch with Smokehouse Pit Beef.",
};

export default function ContactUsPage() {
  return (
    <div className={`${styles.wrap} container`}>
      <div className={styles.formCard}>
        <h1 className={styles.intro}>We would love to hear from you</h1>
        <p className={styles.subtext}>
          Have some feedback or a question? Fill out the form, and we&rsquo;ll get back to you ASAP.
        </p>
        <ContactForm />
      </div>

      <div className={styles.optinCard}>
        <OptInForm showHeading />
      </div>
    </div>
  );
}
