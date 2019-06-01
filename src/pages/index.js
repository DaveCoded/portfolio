import React, { Component } from "react"

import SocialBar from "../components/SocialBar/social-bar"
import styles from "./index.module.scss"

class HomePage extends Component {
  // constructor() {
  //   super()
  //   state: {
  //   }
  // }

  render() {
    return (
      <div className={styles.Background}>
        <p style={{ position: "relative" }}>
          <span style={{ display: "block", fontSize: "4rem" }} id="hello">
            Hello. I'm Dave,
          </span>{" "}
          <span id="developer">a front-end developer from London</span>
        </p>
        <h1 id="welcome">
          Welcome to my
          <br /> portfolio
        </h1>
        <p style={{ float: "right" }} id="explore">
          Now go explore...
        </p>
        <SocialBar />
      </div>
    )
  }

  // componentDidMount(){
  //   if (window.sessionStorage.getItem("firstLoadDone") === null) {
  //     this.setState({

  //     })
  //     window.sessionStorage.setItem("firstLoadDone", 1)
  //   } else {
  //     this.setState({
  //       textClass: styles.loaded,
  //     })
  //   }
  // }
}

export default HomePage
