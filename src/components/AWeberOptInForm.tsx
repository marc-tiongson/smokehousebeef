import styles from "./AWeberOptInForm.module.css";

type AWeberOptInFormProps = {
  heading: string;
  benefits: string[];
};

/**
 * Real AWeber lead form (uncontrolled, submits externally to AWeber) — the
 * hidden field name/value pairs below are reproduced exactly as found in the
 * original `sample-page` and `be-a-grillmaster` source HTML.
 */
export default function AWeberOptInForm({ heading, benefits }: AWeberOptInFormProps) {
  return (
    <div className={styles.wrap}>
      <form
        className={styles.form}
        action="https://www.aweber.com/scripts/addlead.pl"
        method="post"
        target="_new"
      >
        <input name="meta_web_form_id" type="hidden" value="224570238" />
        <input name="meta_split_id" type="hidden" value="" />
        <input name="unit" type="hidden" value="AWEBER LIST NAME" />
        <input name="redirect" type="hidden" value="THANK YOU POST" />
        <input name="meta_redirect_onlist" type="hidden" value="" />
        <input name="meta_adtracking" type="hidden" value="" />
        <input name="meta_message" type="hidden" value="1" />
        <input name="meta_required" type="hidden" value="from" />
        <input name="meta_forward_vars" type="hidden" value="0" />

        <h3 className={styles.heading}>{heading}</h3>
        <ul className={styles.benefits}>
          {benefits.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <p className={styles.subtext}>Enter your Name and Email Below For Instant Access</p>

        <label htmlFor="aweber-name" className={styles.srOnly}>
          Name
        </label>
        <input id="aweber-name" name="name" type="text" placeholder="Enter name" />

        <label htmlFor="aweber-email" className={styles.srOnly}>
          Email
        </label>
        <input id="aweber-email" name="email" type="text" placeholder="Enter email address" />

        <button type="submit" className={styles.submit}>
          Submit
        </button>

        <p className={styles.privacy}>
          <a href="http://www.aweber.com/permission.htm" target="_blank" rel="noopener noreferrer">
            We Respect Your Privacy
          </a>
        </p>
      </form>
    </div>
  );
}
