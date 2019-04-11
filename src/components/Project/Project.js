import React from "react"

import Link from "gatsby-link"
import Img from "gatsby-image"
import styles from "./Project.module.scss"

const Project = ({ node }) => {
  let techUsed
  if (node.tech) {
    techUsed = node.tech.join(", ")
  } else {
    techUsed = null
  }

  return (
    <Link to={`projects/${node.slug}`}>
      <div className={styles.container}>
        <Img fluid={node.featuredImage.fluid} style={{ borderRadius: "5px" }} />

        <div className={styles.overlay}>
          <div className={styles.text}>
            <h3 className={styles.title}>{node.title}</h3>
            <p className={styles.description}>{node.description}</p>
            <p className={styles.techUsed}>{techUsed}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Project
