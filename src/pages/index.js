import React, { Component } from "react"

import Layout from "../components/layout"
import SocialBar from "../components/SocialBar/social-bar"
import styles from "./index.module.scss"

class HomePage extends Component {
  constructor() {
    super()
    this.state = {
      animate: true,
    }
  }

  render() {
    return (
      <Layout animate={this.state.animate}>
        <div className={styles.Background}>
          <div style={{ width: "77%" }}>
            <p style={{ position: "relative" }} id="hello-p">
              <span
                className={
                  this.state.animate ? "fade-in-hello hello-span" : "hello-span"
                }
              >
                Hello. I'm Dave,
              </span>{" "}
              <br />
              <span
                className={this.state.animate ? "descend-developer" : null}
                id="developer"
              >
                a front-end developer from London
              </span>
            </p>
            <h1
              className={this.state.animate ? "fade-in-welcome" : null}
              id="welcome"
            >
              Welcome to my
              <br /> portfolio
            </h1>
            <p
              className={
                this.state.animate ? "slide-in-explore explore-p" : "explore-p"
              }
            >
              Now go explore...
            </p>
          </div>
          <SocialBar animate={this.state.animate} />
        </div>
      </Layout>
    )
  }

  componentDidMount() {
    if (window.sessionStorage.getItem("firstLoadDone") === null) {
      this.setState({
        animate: true,
      })
      window.sessionStorage.setItem("firstLoadDone", 1)
    } else {
      this.setState({
        animate: false,
      })
    }
  }
}

export default HomePage
