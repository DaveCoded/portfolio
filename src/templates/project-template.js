import React, { Component } from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import styles from "./project-template.module.scss"

class Project extends Component {
  render() {
    const {
      title,
      link,
      featuredImage,
      content,
    } = this.props.data.contentfulProject
    return (
      <article className={styles.projectWrapper}>
        <h1>{title}</h1>
        <a href={link}>{link}</a>
        <div className={styles.featuredImageWrapper}>
          <Img sizes={featuredImage.sizes} style={{ borderRadius: "0.6rem" }} />
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: content.childMarkdownRemark.html,
          }}
        />
      </article>
    )
  }
}

export default Project

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      link
      createdAt(formatString: "MMMM DD, YYYY")
      featuredImage {
        sizes(maxWidth: 600) {
          ...GatsbyContentfulSizes
        }
      }
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
