import React from "react"

import styles from "./index.module.scss"

const HomePage = () => {
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
      <p style={{ float: "right" }}>Now go explore...</p>
    </div>
  )
}

export default HomePage

/*
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
*/
