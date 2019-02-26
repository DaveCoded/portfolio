import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/Header/header"

const HomePage = () => (
  <Layout>
    <div style={{ color: `purple` }}>
      <Header>Hello Gatsby!</Header>
      <p>What a world.</p>
      <Link to="/about">About</Link>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  </Layout>
)

export default HomePage
