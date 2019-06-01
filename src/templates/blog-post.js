import React, { Component } from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SocialBar from "../components/SocialBar/social-bar"
import styles from "./blog-post.module.scss"

class BlogPost extends Component {
  render() {
    const {
      title,
      createdAt,
      featuredImage,
      content,
    } = this.props.data.contentfulBlogPost
    return (
      <Layout>
        <article className={styles.articleWrapper}>
          <h1>{title}</h1>
          <p className={styles.createdAt}>{createdAt}</p>
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

export default BlogPost

export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      createdAt(formatString: "MMMM DD, YYYY")
      featuredImage {
        sizes(maxWidth: 800) {
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
