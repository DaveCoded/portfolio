import React from "react"
import Layout from "../components/layout"
import ContactForm from "../components/ContactForm/ContactForm"

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
      <ContactForm />
    </div>
  </Layout>
)

export default Contact
