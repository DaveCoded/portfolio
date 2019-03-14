import React, { Component } from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styles from "./project-template.module.scss"

class Project extends Component {
  render() {
    console.log(this.props)
    const {
      title,
      link,
      featuredImage,
      content,
    } = this.props.data.contentfulProject
    return (
      <Layout>
        <article className={styles.projectWrapper}>
          <h1>{title}</h1>
          <a href={link}>{link}</a>
          <div className={styles.featuredImageWrapper}>
            <Img
              sizes={featuredImage.sizes}
              style={{ borderRadius: "1.5rem" }}
            />
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: content.childMarkdownRemark.html,
            }}
          />
        </article>
      </Layout>
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
