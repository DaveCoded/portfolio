import React from "react"
import styles from "./social-bar.module.scss"

const SocialBar = props => (
  <div className={styles.socialBar}>{props.children}</div>
)

export default SocialBar
