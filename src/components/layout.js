import React from "react"
import { Link } from "gatsby"
import styles from "./layout.module.scss"

import ListLink from "./ListLink/ListLink"
import HomeButton from "../components/HomeButton/homebutton"

const Layout = ({ children }) => {
  var prevScrollpos = window.pageYOffset
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0"
    } else {
      document.getElementById("navbar").style.top = "-80px"
    }
    prevScrollpos = currentScrollPos
  }

  let year = new Date().getFullYear()

  return (
    <div className={styles.layout}>
      <nav id="navbar">
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
      <footer>
        <p>&copy;{year} David Bernhard</p>
      </footer>
    </div>
  )
}

export default Layout
