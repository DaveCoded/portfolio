import React from "react"
import styles from "./social-bar.module.scss"

import SocialButton from "./social-button"
import github from "../../assets/svg/github-button.svg"
import linkedin from "../../assets/svg/linkedin-button.svg"
import twitter from "../../assets/svg/twitter-button.svg"

const githubURL = "https://github.com/DaveCoded"
const linkedinURL = "https://www.linkedin.com/in/dave-bernhard-93b0b876/"
const twitterURL = "https://twitter.com/daveforall"

const SocialBar = () => (
  <div className={styles.socialBar}>
    <div className={styles.socialdiv}>
      <SocialButton href={githubURL} src={github} alt="Github" />
      <SocialButton href={linkedinURL} src={linkedin} alt="LinkedIn" />
      <SocialButton href={twitterURL} src={twitter} alt="Twitter" />
    </div>
  </div>
)

export default SocialBar
