import React from "react"
import { Link } from "gatsby"

import cv from "../../assets/documents/CV.pdf"
import styles from "./SideNav.module.scss"

import SocialButton from "../SocialBar/social-button"
import github from "../../assets/svg/github-button.svg"
import linkedin from "../../assets/svg/linkedin-button.svg"
import twitter from "../../assets/svg/twitter-button.svg"

const githubURL = "https://github.com/DaveCoded"
const linkedinURL = "https://www.linkedin.com/in/dave-bernhard-93b0b876/"
const twitterURL = "https://twitter.com/daveforall"

const SideNav = props => {
  return (
    <nav
      className={styles.SideNav}
      style={props.navIsOpen ? { transform: "translateX(0)" } : null}
    >
      <button
        aria-label="Close navigation sidebar"
        className={styles.CloseNav}
        onClick={props.toggleNav}
      >
        &times;
      </button>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
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
      <div className={styles.socialDiv}>
        <SocialButton href={githubURL} src={github} alt="Github" />
        <SocialButton href={linkedinURL} src={linkedin} alt="LinkedIn" />
        <SocialButton href={twitterURL} src={twitter} alt="Twitter" />
      </div>
    </nav>
  )
}

export default SideNav
