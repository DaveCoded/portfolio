import React from "react"
import { graphql } from "gatsby"

import Link from "gatsby-link"
import Img from "gatsby-image"
import SocialBar from "../components/SocialBar/social-bar"

import styles from "./blog.module.scss"

const BlogPost = ({ node }) => {
  return (
    <Link to={`blog/${node.slug}`}>
      <article className={styles.postLayout}>
        <div className={styles.featuredImage}>
          <Img fluid={node.featuredImage.fluid} />
        </div>
        <div style={{ paddingTop: "2rem" }}>
          <h3>{node.title}</h3>
          <span className={styles.createdAt}>{node.createdAt}</span>
          <p>{node.content.childMarkdownRemark.excerpt}</p>
        </div>
        <div
          style={{
            backgroundColor: "#F0DB4E",
            width: "2rem",
            height: "100%",
            gridRow: "1 / -1",
            gridColumn: "3",
            borderRadius: "0 5px 5px 0",
          }}
        />
      </article>
    </Link>
  )
}

const IndexPage = props => {
  return (
    // <Layout colorProp="blue">
    <div className={styles.indexLayout}>
      <SocialBar />
      <p
        style={{
          fontSize: "2.3rem",
          marginBottom: "3rem",
        }}
      >
        Writings and learnings about tech and other things.
      </p>
      {props.data.allContentfulBlogPost.edges.map(edge => (
        <BlogPost key={edge.node.id} node={edge.node} />
      ))}
    </div>
    // </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    allContentfulBlogPost(
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: [createdAt], order: ASC }
    ) {
      edges {
        node {
          id
          title
          slug
          createdAt(formatString: "MMMM DD, YYYY")
          featuredImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          content {
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
  }
`
