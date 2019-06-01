import React from "react"

import styles from "./social-button.module.scss"

const SocialButton = props => (
  <a
    className={styles.button}
    href={props.href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={props.src} alt={props.alt} />
  </a>
)

export default SocialButton
