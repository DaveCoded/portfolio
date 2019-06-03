import React from "react"

import styles from "./SideNav.module.scss"

const SideNav = () => {
  return (
    <nav className={styles.SideNav}>
      <button aria-label="Close navigation sidebar" class="close-nav">
        &times;
      </button>
      <ul>
        <li>about</li>
        <li>projects</li>
        <li>blog</li>
        <li>cv</li>
        <li>contact</li>
      </ul>
    </nav>
  )
}

export default SideNav
