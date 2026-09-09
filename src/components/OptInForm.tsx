"use client";

import { useId, useState, type FormEvent } from "react";
import styles from "./OptInForm.module.css";

const DEFAULT_BENEFITS = [
  "The Best Drum Smokers",
  "The Difference In Grilling & BBQing",
  "Homemade BBQ Pits",
];

type OptInFormProps = {
  /** Heading shown above the form. Only rendered when showHeading is true. */
  heading?: string;
  benefits?: string[];
  /**
   * Set to true when this form is not already sitting under a matching
   * heading/benefit list rendered by the parent page (e.g. the homepage
   * renders its own "Free Smoked Meats Guide" heading before <OptInForm />).
   */
  showHeading?: boolean;
};

export default function OptInForm({
  heading = "Free Smoked Meats Guide",
  benefits = DEFAULT_BENEFITS,
  showHeading = false,
}: OptInFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const nameId = useId();
  const emailId = useId();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // This is a static form: it is not yet wired up to a backend or email
    // service. Swap handleSubmit for a real API/email integration when one
    // is available.
    setSubmitted(true);
  }

  return (
    <div className={styles.wrap}>
      {showHeading && (
        <>
          <h3 className={styles.heading}>{heading}</h3>
          <ul className={styles.benefits}>
            {benefits.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </>
      )}

      {submitted ? (
        <p className={styles.thanks}>Thanks! Check your inbox for instant access.</p>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <p className={styles.subtext}>Enter your Name and Email Below For Instant Access</p>

          <label htmlFor={nameId} className={styles.srOnly}>
            Name
          </label>
          <input id={nameId} name="name" type="text" placeholder="Enter name" />

          <label htmlFor={emailId} className={styles.srOnly}>
            Email
          </label>
          <input id={emailId} name="email" type="email" placeholder="Enter email address" required />

          <button type="submit" className={styles.submit}>
            Get Instant Access
          </button>
        </form>
      )}
    </div>
  );
}
