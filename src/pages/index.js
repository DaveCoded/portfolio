import React, { Component } from "react"
import { graphql } from "gatsby"
import SocialBar from "../components/SocialBar/social-bar"
import BackgroundImage from "gatsby-background-image"
import styles from "./index.module.scss"

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textClass: null,
    }
  }

  render() {
    return (
      <>
        <SocialBar />
        <BackgroundImage
          className={styles.background}
          fluid={this.props.data.background.childImageSharp.fluid}
        >
          <h1 hidden>Dave</h1>
          <h2 className={this.state.textClass}>Front-end Web Developer</h2>
        </BackgroundImage>
      </>
    )
  }

  // Only animate the h2 on first page load

  componentDidMount() {
    if (window.sessionStorage.getItem("firstLoadDone") === null) {
      this.setState({
        textClass: styles.animate,
      })
      window.sessionStorage.setItem("firstLoadDone", 1)
    } else {
      this.setState({
        textClass: styles.loaded,
      })
    }
  }
}

export default HomePage

export const query = graphql`
  query {
    background: file(relativePath: { eq: "backpng.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
