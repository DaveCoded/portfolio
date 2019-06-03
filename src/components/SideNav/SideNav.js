import React from "react"
import { Link } from "gatsby"

import cv from "../../assets/documents/CV.pdf"
import styles from "./SideNav.module.scss"

const SideNav = () => {
  return (
    <nav className={styles.SideNav}>
      <button aria-label="Close navigation sidebar" className={styles.CloseNav}>
        &times;
      </button>
      <ul>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/projects">projects</Link>
        </li>
        <li>
          <Link to="/blog">blog</Link>
        </li>
        <li>
          <a href={cv}>cv</a>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default SideNav
