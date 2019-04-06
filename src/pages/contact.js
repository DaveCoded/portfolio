import React from "react"
import { navigateTo } from "gatsby-link"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SocialBar from "../components/SocialBar/social-bar"
import styles from "./contact.module.scss"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout colorProp="blue">
        <Img
          fluid={this.props.data.bubbles.childImageSharp.fluid}
          className={styles.background}
        />
        <div className={styles.formContainer}>
          <div className={styles.overlay}>
            <h1>Get in touch</h1>
            <form
              name="contact"
              method="post"
              action="/thanks/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
            >
              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don’t fill this out:{" "}
                  <input name="bot-field" onChange={this.handleChange} />
                </label>
              </p>
              <p className={styles.Input}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  onChange={this.handleChange}
                  required
                />
                <label htmlFor="name">Your name</label>
              </p>
              <p className={styles.Input}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  onChange={this.handleChange}
                  required
                />
                <label htmlFor="email">Your email</label>
              </p>
              <p className={styles.Textarea}>
                <textarea
                  name="message"
                  placeholder="Message"
                  onChange={this.handleChange}
                  required
                />
                <label htmlFor-="message">Message</label>
              </p>
              <p className={styles.buttonP}>
                <button type="submit">Send</button>
              </p>
            </form>
            <SocialBar />
          </div>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    bubbles: file(relativePath: { eq: "telephone.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
