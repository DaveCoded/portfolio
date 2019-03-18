import React from "react"
import styles from "./ContactForm.module.scss"

const ContactForm = () => (
  <section className={styles.formWrapper}>
    <form name="contact" method="POST" data-netlify="true" action="/contact/">
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
