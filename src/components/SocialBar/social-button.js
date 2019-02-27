import React from "react"

import styles from "./social-button.module.scss"

const SocialButton = props => (
  <a className={styles.button} href={props.href}>
    <img src={props.src} alt={props.alt} />
  </a>
)

export default SocialButton
