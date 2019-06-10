import React, { Component } from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import SEO from "../components/SEO"
import Layout from "../components/layout"
import SocialBar from "../components/SocialBar/social-bar"
import styles from "./blog-post.module.scss"

class BlogPost extends Component {
  render() {
    const {
      title,
      createdAt,
      featuredImage,
      slug,
      description,
      content,
    } = this.props.data.contentfulBlogPost
    return (
      <Layout>
        <SEO
          title={title}
          desc={description || " "}
          image={featuredImage}
          pathname={slug}
          article
        />
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
      slug
      description
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
