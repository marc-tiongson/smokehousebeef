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
        <label htmlFor={nameId} className={styles.srOnly}>
          Name
        </label>
        <input id={nameId} name="name" type="text" placeholder="Name" />
      </div>

      <div className={styles.field}>
        <label htmlFor={emailId} className={styles.srOnly}>
          Email
        </label>
        <input id={emailId} name="email" type="email" placeholder="Email" required />
      </div>

      <div className={styles.field}>
        <label htmlFor={phoneId} className={styles.srOnly}>
          Phone
        </label>
        <input id={phoneId} name="phone" type="tel" placeholder="Phone" required />
      </div>

      <div className={styles.field}>
        <label htmlFor={messageId} className={styles.srOnly}>
          Message
        </label>
        <textarea id={messageId} name="message" rows={6} placeholder="Message" />
      </div>

      <button type="submit" className={styles.submit}>
        Submit
      </button>
    </form>
  );
}
