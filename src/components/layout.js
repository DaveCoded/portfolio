import React, { Component } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styles from "./layout.module.scss"
import ListLink from "./ListLink/ListLink"
import Hamburger from "./Hamburger/Hamburger"
import SideNav from "./SideNav/SideNav"
import cv from "../assets/documents/CV.pdf"

class Layout extends Component {
  constructor() {
    super()
    this.state = {
      navIsOpen: false,
    }
  }

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

  toggleNav() {
    this.setState(prevState => {
      return {
        navIsOpen: !prevState.navIsOpen,
      }
    })
  }

  render() {
    let year = new Date().getFullYear()

    return (
      <>
        <div className={styles.layout}>
          <nav
            className={this.props.animate ? "navbar-drop" : null}
            id="navbar"
          >
            <AniLink
              fade
              to="/"
              activeStyle={{
                display: "none",
              }}
            >
              <li className={styles.homeLink}>home</li>
            </AniLink>
            <ul className="nav-link">
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
            <Hamburger toggleNav={this.toggleNav.bind(this)} />
          </nav>
          {this.props.children}
          <footer>
            <p>&copy;{year} David Bernhard</p>
          </footer>
        </div>
        <SideNav
          navIsOpen={this.state.navIsOpen}
          toggleNav={this.toggleNav.bind(this)}
        />
      </>
    )
  }
}

export default Layout
