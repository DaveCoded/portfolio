import React from "react"

import Link from "gatsby-link"
import Img from "gatsby-image"
import styles from "./Project.module.scss"

const Project = ({ node }) => (
  <Link to={`projects/${node.slug}`}>
    <div className={styles.container}>
      <Img fluid={node.featuredImage.fluid} style={{ borderRadius: "5px" }} />
    </div>
  </Link>
)

export default Project
