import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/Header/header"

const About = () => (
  <Layout>
    <div>
      <div>
        <Header>About Dave</Header>
        <p>Dave is so cool.</p>
        <Link to="/">Home</Link>
      </div>
    </div>
  </Layout>
)

export default About
