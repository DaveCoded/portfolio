import React from "react"

import styles from "./Hamburger.module.scss"

const Hamburger = props => {
  return (
    <>
      <button
        aria-label="Open navigation sidebar"
        className={styles.Hamburger}
        onClick={props.toggleNav}
      >
        <div className={styles.Bar} />
        <div className={styles.Bar} />
        <div className={styles.Bar} />
      </button>
    </>
  )
}

export default Hamburger
