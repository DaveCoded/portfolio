import React from "react"

import styles from "./Hamburger.module.scss"

const Hamburger = () => (
  <>
    <button aria-label="Open navigation sidebar" className={styles.Hamburger}>
      <div className={styles.Bar} />
      <div className={styles.Bar} />
      <div className={styles.Bar} />
    </button>
  </>
)

export default Hamburger
