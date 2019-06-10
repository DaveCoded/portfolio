import React, { Component } from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import SEO from "../components/SEO"
import Layout from "../components/layout"
import SocialBar from "../components/SocialBar/social-bar"
import styles from "./project-template.module.scss"

class Project extends Component {
  render() {
    const {
      title,
      link,
      featuredImage,
      slug,
      description,
      content,
    } = this.props.data.contentfulProject
    return (
      <Layout>
        <SEO
          title={title}
          desc={description || " "}
          image={featuredImage}
          pathname={slug}
          article
        />
        <article className={styles.projectWrapper}>
          <h1>{title}</h1>
          <a href={link}>{link}</a>
          <div className={styles.featuredImageWrapper}>
            <Img
              sizes={featuredImage.sizes}
              style={{ borderRadius: "0.6rem" }}
            />
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: content.childMarkdownRemark.html,
            }}
          />
          <SocialBar />
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
      slug
      description
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
