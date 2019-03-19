import React, { Component } from "react"

class ContactForm extends Component {
  render() {
    return (
      <form name="contact" method="post" action="/success/" data-netlify="true">
        <input name="name" placeholder="Your Name" type="text" />
        <button>Send</button>
      </form>
    )
  }
}

export default ContactForm
