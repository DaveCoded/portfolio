import React from "react"
import styles from "./index.module.scss"

import Layout from "../components/layout"
import SocialBar from "../components/SocialBar/social-bar"
import SocialButton from "../components/SocialBar/social-button"
import github from "../assets/github-button.svg"
import linkedin from "../assets/linkedin-button.svg"
import twitter from "../assets/twitter-button.svg"
import coderlist from "../assets/coderlist-button.svg"

const HomePage = () => (
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
        <SocialButton
          href="https://github.com/DaveCoded"
          src={github}
          alt="Github logo"
        />
        <SocialButton
          href="https://www.linkedin.com/in/dave-bernhard-93b0b876/"
          src={linkedin}
          alt="LinkedIn logo"
        />
        <SocialButton
          href="https://twitter.com/earthwormdave"
          src={twitter}
          alt="Twitter logo"
        />
        <SocialButton
          href="https://www.coderlist.io/profile/coderlist423"
          src={coderlist}
          alt="CoderList logo"
        />
      </div>
    </section>
  </Layout>
)

export default HomePage
