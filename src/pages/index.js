import React from "react"
import styles from "./index.module.scss"

import Layout from "../components/layout"
import SocialBar from "../components/SocialBar/social-bar"

const HomePage = () => (
  <Layout>
    <section className={styles.background}>
      <div className={styles.polygon} />
      <SocialBar />
      <h1>Hi. My name is Dave.</h1>
    </section>
  </Layout>
)

export default HomePage
