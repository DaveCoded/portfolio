import React from "react"
import Layout from "../components/layout"

const Contact = () => (
  <Layout>
    <div style={{ margin: "10rem" }}>
      <h1
        style={{
          marginBottom: "6rem",
          fontSize: "4rem",
          fontFamily: `"Pompiere", "Neutra Text Light", sansSerif`,
        }}
      >
        Get in touch
      </h1>
      <form
        name="contact"
        method="post"
        action="/success/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input name="name" placeholder="Your Name" type="text" />
        <button>Send</button>
      </form>
    </div>
  </Layout>
)

export default Contact
