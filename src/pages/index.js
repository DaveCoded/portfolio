import React from "react"
import styles from "./index.module.scss"

import Layout from "../components/layout"
import SocialBar from "../components/SocialBar/social-bar"
import SocialButton from "../components/SocialBar/social-button"
import github from "../assets/github-button.svg"
import linkedin from "../assets/linkedin-button.svg"
import twitter from "../assets/twitter-button.svg"
import coderlist from "../assets/coderlist-button.svg"

const HomePage = () => {
  const githubURL = "https://github.com/DaveCoded"
  const linkedinURL = "https://www.linkedin.com/in/dave-bernhard-93b0b876/"
  const twitterURL = "https://twitter.com/earthwormdave"
  const coderlistURL = "https://www.coderlist.io/profile/coderlist423"

  return (
    <Layout>
      <section className={styles.background}>
        <div className={styles.polygon}>
          <h1 className={styles.heading}>
            Hi. My name is Dave. <br /> Welcome to my portfolio.
          </h1>
          <hr />
        </div>
        <SocialBar />
        <div className={styles.socialdiv}>
          <SocialButton href={githubURL} src={github} alt="Github" />
          <SocialButton href={linkedinURL} src={linkedin} alt="LinkedIn" />
          <SocialButton href={twitterURL} src={twitter} alt="Twitter" />
          <SocialButton href={coderlistURL} src={coderlist} alt="CoderList" />
        </div>
      </section>
    </Layout>
  )
}

export default HomePage
