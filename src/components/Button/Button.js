import React from "react"

import styles from "./Button.module.scss"

const Button = props => (
  <button
    style={{
      backgroundColor: props.active === props.name ? "rgb(235, 52, 132)" : null,
    }}
    className={styles.Button}
    name={props.name}
    onClick={props.onClick}
  >
    {props.children}
  </button>
)

export default Button
