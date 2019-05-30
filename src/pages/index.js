import React, { Component } from "react"
import { graphql } from "gatsby"

import PatternBackground from "../components/PatternBackground/PatternBackground"
import SocialBar from "../components/SocialBar/social-bar"
// import styles from "./index.module.scss"

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textClass: null,
    }
  }

  render() {
    return (
      <PatternBackground>
        <SocialBar />
      </PatternBackground>
    )
  }

  // Only animate the h2 on first page load
  /*
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
  } */
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
