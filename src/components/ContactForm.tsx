"use client";

import { useId, useState, type FormEvent } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const messageId = useId();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // This is a static form: it is not yet wired up to a backend or email
    // service. Swap handleSubmit for a real API/email integration when one
    // is available.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={styles.thanks}>
        <p>Thanks for reaching out &mdash; we&apos;ll be in touch soon.</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor={nameId}>Name</label>
        <input id={nameId} name="name" type="text" placeholder="Your name" />
      </div>

      <div className={styles.field}>
        <label htmlFor={emailId}>Email *</label>
        <input id={emailId} name="email" type="email" placeholder="you@example.com" required />
      </div>

      <div className={styles.field}>
        <label htmlFor={phoneId}>Phone *</label>
        <input id={phoneId} name="phone" type="tel" placeholder="(555) 555-5555" required />
      </div>

      <div className={styles.field}>
        <label htmlFor={messageId}>Message</label>
        <textarea id={messageId} name="message" rows={5} placeholder="How can we help?" />
      </div>

      <button type="submit" className={styles.submit}>
        Send
      </button>
    </form>
  );
}
