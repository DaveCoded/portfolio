import React, { Component } from "react"
import styles from "./index.module.scss"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SocialBar from "../components/SocialBar/social-bar"

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Layout>
        <header className={styles.topBackground}>
          <div className={styles.polygon}>
            <h1 className={styles.heading}>
              <span className={this.state.firstSpanClass}>
                Hi. My name is Dave.
              </span>
              <span className={this.state.secondSpanClass}>
                Welcome to my portfolio.
              </span>
            </h1>
            <hr className={styles.horizontalRule} />
          </div>
          <SocialBar />
          <div className={styles.description}>
            <p>
              I am a front end developer with a <br /> passion for JavaScript,
              CSS and creating <br /> beautiful experiences that are accessible
              to all
            </p>
          </div>
        </header>
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
            <Img fluid={this.props.data.eenyLogo.childImageSharp.fluid} />
          </div>
        </section>
        <section className={styles.sectionThree}>
          <Img fluid={this.props.data.laptop.childImageSharp.fluid} />
          <p>
            Now I want to join a team of developers <br />
            to <span>learn</span> exciting new technologies and methods...
          </p>
        </section>
        <section className={styles.sectionFour}>
          <Img fluid={this.props.data.mountainJump.childImageSharp.fluid} />
          <p className={styles.paraOne}>
            To <span>collaborate</span> on something bigger than <br /> the sum
            of its parts...
          </p>
          <p className={styles.paraTwo}>
            and make the web better for <span>everyone</span>
          </p>
        </section>
      </Layout>
    )
  }

  // Only animate the h1 on first page load

  componentDidMount() {
    if (window.sessionStorage.getItem("firstLoadDone") === null) {
      this.setState({
        firstSpanClass: styles.firstBitAnimated,
        secondSpanClass: styles.secondBitAnimated,
      })
      window.sessionStorage.setItem("firstLoadDone", 1)
    } else {
      this.setState({
        firstSpanClass: styles.firstBit,
        secondSpanClass: styles.secondBit,
      })
    }
  }
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
