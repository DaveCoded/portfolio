import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Button from "../components/Button/Button"
import SocialBar from "../components/SocialBar/social-bar"
import styles from "./about.module.scss"

const About = props => (
  <Layout colorProp="blue">
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.buttonColumn}>
          <Button buttonText="intro" />
          <Button buttonText="coding" />
          <Button buttonText="tech" />
          <Button buttonText="interests" />
        </div>
        <div className={styles.contentColumn}>
          Conditionally render components here
        </div>
      </div>
      <SocialBar />
    </header>
    <section className={styles.eeny}>
      <div className={styles.leftDiv}>
        <p>
          In August 2018, I started{" "}
          <span style={{ color: "#3B4681" }}>Eeny Meeny Creative</span> with a
          friend. We wanted to learn on the job, by founding our own company...
        </p>
      </div>
      <div>
        <div>
          <Img fluid={props.data.eeny.childImageSharp.fluid} />
        </div>
      </div>
    </section>
    <section className={styles.laptop}>
      <div>
        <div>
          <Img
            fluid={props.data.laptop.childImageSharp.fluid}
            style={{ height: "88vh" }}
          />
        </div>
      </div>
      <div className={styles.rightDiv}>
        <p>
          Now I want to join a team of developers to{" "}
          <span style={{ color: "#EB3484" }}>learn</span> exciting new
          technologies and methods...
        </p>
      </div>
    </section>
    <section className={styles.betterWeb}>
      <p>
        To collaborate on something
        <br />
        bigger than the sum of its parts
      </p>
      <hr />
      <p>
        and make the web better <br />
        for everyone
      </p>
    </section>
  </Layout>
)

export default About

export const query = graphql`
  query {
    eeny: file(relativePath: { eq: "header-logo-trim.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    laptop: file(relativePath: { eq: "laptop.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
