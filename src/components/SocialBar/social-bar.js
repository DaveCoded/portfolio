import React from "react"
import styles from "./social-bar.module.scss"

import SocialButton from "./social-button"
import github from "../../assets/svg/github-button.svg"
import linkedin from "../../assets/svg/linkedin-button.svg"
import twitter from "../../assets/svg/twitter-button.svg"
import coderlist from "../../assets/svg/coderlist-button.svg"

const githubURL = "https://github.com/DaveCoded"
const linkedinURL = "https://www.linkedin.com/in/dave-bernhard-93b0b876/"
const twitterURL = "https://twitter.com/daveforall"
const coderlistURL = "https://www.coderlist.io/profile/coderlist423"

const SocialBar = () => (
  <div className={styles.socialBar}>
    <div className={styles.socialdiv}>
      <SocialButton href={githubURL} src={github} alt="Github" />
      <SocialButton href={linkedinURL} src={linkedin} alt="LinkedIn" />
      <SocialButton href={twitterURL} src={twitter} alt="Twitter" />
      <SocialButton href={coderlistURL} src={coderlist} alt="CoderList" />
    </div>
  </div>
)

export default SocialBar
