import React from "react"
import { Link } from "gatsby"
import styles from "./layout.module.scss"

import ListLink from "./ListLink/ListLink"
import HomeButton from "../components/HomeButton/homebutton"

export default ({ children }) => (
  <div className={styles.layout}>
    <nav>
      <Link to="/">
        <HomeButton />
      </Link>
      <ul>
        <ListLink to="/about/">about</ListLink>
        <ListLink to="/projects/">projects</ListLink>
        <ListLink to="/blog/">blog</ListLink>
        <ListLink to="/cv/">cv</ListLink>
        <ListLink to="/contact/">contact</ListLink>
      </ul>
    </nav>
    {children}
    <footer />
  </div>
)
