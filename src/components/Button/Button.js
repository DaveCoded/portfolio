import React from "react"

import styles from "./Button.module.scss"

const Button = props => (
  <button className={styles.Button} name={props.name} onClick={props.onClick}>
    {props.children}
  </button>
)

export default Button
