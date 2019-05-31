import React, { Component } from "react"
import { graphql } from "gatsby"

import SocialBar from "../components/SocialBar/social-bar"
import styles from "./index.module.scss"

import purpleButton from "../assets/svg/purple-button.svg"

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textClass: null,
    }
  }

  render() {
    return (
      <main className={styles.Background}>
        <button className={styles.Button}>
          <img src={purpleButton} alt="Click Me!" />
          <span>Click Me!</span>
        </button>
        <SocialBar />
      </main>
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
