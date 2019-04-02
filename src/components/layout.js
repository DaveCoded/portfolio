import React, { Component } from "react"
import { Link } from "gatsby"
import styles from "./layout.module.scss"

import ListLink from "./ListLink/ListLink"
import HomeButton from "../components/HomeButton/homebutton"

import cv from "../assets/documents/CV.pdf"

class Layout extends Component {
  componentDidMount() {
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
  }

  render() {
    let year = new Date().getFullYear()
    let navColor = ""
    if (this.props.colorProp === "blue") {
      navColor = "#152063"
    }

    return (
      <div className={styles.layout}>
        <nav style={{ backgroundColor: navColor }} id="navbar">
          <Link to="/">
            <HomeButton />
          </Link>
          <ul className="nav-link">
            <ListLink to="/">home</ListLink>
            <ListLink to="/about/">about</ListLink>
            <ListLink to="/projects/">projects</ListLink>
            <ListLink to="/blog/">blog</ListLink>
            <li>
              <a href={cv} target="_blank" rel="noopener noreferrer">
                cv
              </a>
            </li>
            <ListLink to="/contact/">contact</ListLink>
          </ul>
        </nav>
        {this.props.children}
        <footer>
          <p>&copy;{year} David Bernhard</p>
        </footer>
      </div>
    )
  }
}

export default Layout
