import React from "react"

import styles from "./index.module.scss"

const HomePage = () => {
  return (
    <div className={styles.Background}>
      <p>
        <span className={styles.Hello}>Hello. I'm Dave,</span>{" "}
        <span className={styles.Developer}>
          a front-end developer from London
        </span>
      </p>
      <h1>Welcome to my portfolio</h1>
      <p className={styles.Explore}>Now go explore...</p>
    </div>
  )
}

export default HomePage
