import React from "react"
import styles from "./index.module.scss"

import Layout from "../components/layout"

const HomePage = () => (
  <Layout>
    <section className={styles.background}>
      <div className={styles.polygon} />
      <h1>Hi. My name is Dave.</h1>
    </section>
  </Layout>
)

export default HomePage
