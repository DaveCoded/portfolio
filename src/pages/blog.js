import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Link from "gatsby-link"
import SocialBar from "../components/SocialBar/social-bar"
import CategoryImage from "../components/BlogComponents/CategoryImage"
import CategoryDiv from "../components/BlogComponents/CategoryDiv"

import styles from "./blog.module.scss"

const BlogPost = ({ node }) => {
  return (
    <article className={styles.postLayout}>
      <div className={styles.featuredImage}>
        <Link to={`/blog/${node.slug}`}>
          <CategoryImage subject={node.category} />
        </Link>
      </div>
      <div style={{ paddingTop: "2rem" }}>
        <Link to={`/blog/${node.slug}`}>
          <h3>{node.title}</h3>
        </Link>
        <span className={styles.createdAt}>{node.createdAt}</span>
        <p>{node.content.childMarkdownRemark.excerpt}</p>
      </div>
      <CategoryDiv subject={node.category} />
    </article>
  )
}

const IndexPage = props => {
  return (
    <Layout>
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
    </Layout>
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
          category
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
