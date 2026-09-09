import type { Metadata } from "next";
import AWeberOptInForm from "@/components/AWeberOptInForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Be a Grillmaster | Smokehouse Pit Beef",
  description: "Download your free guide to becoming a grill master.",
};

const BENEFITS = [
  "The Basics of Grilling for Grillmastery",
  "Direct And Indirect Methods",
  "Searing – The Secret To The Perfect Steak",
];

export default function BeAGrillmasterPage() {
  return (
    <div className={`${styles.wrap} container`}>
      <h1 className={styles.title}>Be a Grillmaster</h1>

      <div className={styles.hero}>
        <p className={styles.headline}>Download Your Guide To Become A Grill Master</p>
        <div className={styles.placeholder}>Guide preview image</div>
      </div>

      <div className={styles.formSection}>
        <AWeberOptInForm heading="Free Grill Master Guide" benefits={BENEFITS} />
      </div>
    </div>
  );
}
