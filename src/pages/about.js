import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"

const About = () => (
  <div>
    <div style={{ color: `teal` }}>
      <Header>About Dave</Header>
      <p>Dave is so cool.</p>
      <Link to="/">Home</Link>
    </div>
  </div>
)

export default About
