import React from "react"
import styles from "./index.module.scss"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SocialBar from "../components/SocialBar/social-bar"
import SocialButton from "../components/SocialBar/social-button"
import github from "../assets/svg/github-button.svg"
import linkedin from "../assets/svg/linkedin-button.svg"
import twitter from "../assets/svg/twitter-button.svg"
import coderlist from "../assets/svg/coderlist-button.svg"

const HomePage = ({ data }) => {
  const githubURL = "https://github.com/DaveCoded"
  const linkedinURL = "https://www.linkedin.com/in/dave-bernhard-93b0b876/"
  const twitterURL = "https://twitter.com/earthwormdave"
  const coderlistURL = "https://www.coderlist.io/profile/coderlist423"

  return (
    <Layout>
      <section className={styles.background}>
        <div className={styles.polygon}>
          <h1 className={styles.heading}>
            Hi. My name is Dave. <br /> Welcome to my portfolio.
          </h1>
          <hr />
        </div>
        <SocialBar />
        <div className={styles.socialdiv}>
          <SocialButton href={githubURL} src={github} alt="Github" />
          <SocialButton href={linkedinURL} src={linkedin} alt="LinkedIn" />
          <SocialButton href={twitterURL} src={twitter} alt="Twitter" />
          <SocialButton href={coderlistURL} src={coderlist} alt="CoderList" />
        </div>
        <Img fluid={data.eenyLogo.childImageSharp.fluid} />
      </section>
    </Layout>
  )
}

export default HomePage

export const query = graphql`
  query {
    eenyLogo: file(relativePath: { eq: "header-logo-trim.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
