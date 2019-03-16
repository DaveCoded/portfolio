import React from "react"

import Link from "gatsby-link"
import Img from "gatsby-image"
// import styles from "./Project.module.scss"

const Project = ({ node }) => (
  <Link to={`projects/${node.slug}`}>
    <div>
      <Img
        fluid={node.featuredImage.fluid}
        style={{ borderRadius: "0.6rem" }}
      />
    </div>
  </Link>
)

export default Project
