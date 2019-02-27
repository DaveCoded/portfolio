import React from "react"
import { Link } from "gatsby"
import styles from "./layout.module.scss"

import HomeButton from "../components/HomeButton/homebutton"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div className={styles.layout}>
    <nav>
      <Link to="/">
        <HomeButton />
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
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
