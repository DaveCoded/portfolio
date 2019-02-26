import React from "react"

import styles from "./header.module.css"

const Header = props => (
  <div>
    <h1 className={styles.heading}>{props.children}</h1>
  </div>
)

export default Header
