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
      <div className={styles.polygon} />
      <SocialBar>
        <SocialButton href="#" src={github} alt="Github logo" />
        <SocialButton href="#" src={linkedin} alt="LinkedIn logo" />
        <SocialButton href="#" src={twitter} alt="Twitter logo" />
        <SocialButton href="#" src={coderlist} alt="CoderList logo" />
      </SocialBar>
      <h1>Hi. My name is Dave.</h1>
    </section>
  </Layout>
)

export default HomePage
