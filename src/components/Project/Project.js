import React from "react"

import Link from "gatsby-link"
import Img from "gatsby-image"

const Project = ({ node }) => (
  <article
    style={{
      marginBottom: "1.5rem",
      padding: "1.5rem",
      border: "1px solid #ccc",
    }}
  >
    <h3>
      <Link to={`projects/${node.slug}`}>{node.title}</Link>
    </h3>
    <p>{node.link}</p>
    <div>
      <div>
        <Img resolutions={node.featuredImage.resolutions} />
      </div>
      <div>
        <p>{node.content.childMarkdownRemark.excerpt}</p>
      </div>
    </div>
  </article>
)

export default Project
