import React from "react"
import styles from "./ContactForm.module.scss"

const ContactForm = () => (
  <section className={styles.formWrapper}>
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      netlify
    >
      <input type="hidden" name="bot-field" />
      <div className={styles.formInput}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div className={styles.formInput}>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows="6" />
      </div>
      <ul>
        <li>
          <input type="submit" value="Send Message" />
        </li>
        <li>
          <input type="reset" value="Clear" />
        </li>
      </ul>
    </form>
  </section>
)

export default ContactForm