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
      <section className={styles.topBackground}>
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
        <div className={styles.description}>
          <p>
            I am a front end developer with a <br /> passion for JavaScript, CSS
            and creating <br /> beautiful experiences that are accessible to all
          </p>
        </div>
      </section>
      <section className={styles.sectionTwo}>
        <div className={styles.eenyText}>
          <p>
            In August 2018, I started{" "}
            <span className={styles.eenySpan}>
              Eeny <br /> Meeny Creative
            </span>{" "}
            with a friend. We <br /> wanted to learn on the job, by <br />{" "}
            founding our own company...
          </p>
        </div>
        <div className={styles.eenyDiv}>
          <Img fluid={data.eenyLogo.childImageSharp.fluid} />
        </div>
      </section>
      <section className={styles.sectionThree}>
        <Img fluid={data.laptop.childImageSharp.fluid} />
        <p>
          Now I want to join a team of developers <br />
          to <span>learn</span> exciting new technologies and methods...
        </p>
      </section>
      <section className={styles.sectionFour}>
        <Img fluid={data.mountainJump.childImageSharp.fluid} />
        <p className={styles.paraOne}>
          To <span>collaborate</span> on something bigger than <br /> the sum of
          its parts...
        </p>
        <p className={styles.paraTwo}>
          and make the web better for <span>everyone</span>
        </p>
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
    laptop: file(relativePath: { eq: "pointing-laptop.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mountainJump: file(relativePath: { eq: "mountain-jump.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
