import React, { Component } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styles from "./layout.module.scss"
import ListLink from "./ListLink/ListLink"
import Hamburger from "./Hamburger/Hamburger"
import SideNav from "./SideNav/SideNav"
import cv from "../assets/documents/CV.pdf"
import SocialButton from "./SocialBar/social-button"

import github from "../assets/svg/github-button.svg"
import linkedin from "../assets/svg/linkedin-button.svg"
import twitter from "../assets/svg/twitter-button.svg"

const githubURL = "https://github.com/DaveCoded"
const linkedinURL = "https://www.linkedin.com/in/dave-bernhard-93b0b876/"
const twitterURL = "https://twitter.com/daveforall"

class Layout extends Component {
  constructor() {
    super()
    this.state = {
      navIsOpen: false,
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
            <li className={styles.homeLink}>
              <AniLink
                fade
                to="/"
                activeStyle={{
                  display: "none",
                }}
              >
                home
              </AniLink>
            </li>
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
            <div className={styles.innerDiv}>
              <p>&copy;{year} David Bernhard</p>
              <div className={styles.socialButtons}>
                <SocialButton href={githubURL} src={github} alt="Github" />
                <SocialButton
                  href={linkedinURL}
                  src={linkedin}
                  alt="LinkedIn"
                />
                <SocialButton href={twitterURL} src={twitter} alt="Twitter" />
              </div>
            </div>
          </footer>
        </div>
        <SideNav
          navIsOpen={this.state.navIsOpen}
          toggleNav={this.toggleNav.bind(this)}
        />
      </>
    )
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
}

export default Layout
