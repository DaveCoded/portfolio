import React from "react"
import { navigateTo } from "gatsby-link"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

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
      <BackgroundImage
        className={styles.Background}
        Tag="div"
        fluid={this.props.data.forest.childImageSharp.fluid}
      >
        <div className={styles.Overlay}>
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
              <label className="visually-hidden" htmlFor="name">
                Your name
              </label>
            </p>
            <p className={styles.Input}>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                onChange={this.handleChange}
                required
              />
              <label className="visually-hidden" htmlFor="email">
                Your email
              </label>
            </p>
            <p className={styles.Textarea}>
              <textarea
                name="message"
                placeholder="Message"
                onChange={this.handleChange}
                required
              />
              <label className="visually-hidden" htmlFor-="message">
                Message
              </label>
            </p>
            <p className={styles.buttonP}>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
        <SocialBar />
      </BackgroundImage>
    )
  }
}

export const query = graphql`
  query {
    forest: file(relativePath: { eq: "forest-1800.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
