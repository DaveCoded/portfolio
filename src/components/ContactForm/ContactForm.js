import React, { Component } from "react"
import styles from "./ContactForm.module.scss"

class ContactForm extends Component {
  render() {
    return (
      <form
        name="contact"
        method="post"
        action="/success"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input name="name" placeholder="Your Name" type="text" />
        <button>Send</button>
      </form>
    )
  }
}

export default ContactForm
