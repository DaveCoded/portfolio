import React from "react"
import { graphql } from "gatsby"

import Link from "gatsby-link"
import Img from "gatsby-image"

import styles from "./blog.module.scss"

const BlogPost = ({ node }) => {
  return (
    <Link to={`blog/${node.slug}`}>
      <div className={styles.postLayout}>
        <h3>{node.title}</h3>
        <div className={styles.featuredImage}>
          <Img fluid={node.featuredImage.fluid} />
        </div>
        <div className={styles.contentBox}>
          <p className={styles.createdAt}>{node.createdAt}</p>
          <p>{node.content.childMarkdownRemark.excerpt}</p>
        </div>
      </div>
    </Link>
  )
}

const IndexPage = props => {
  console.log(props)
  return (
    // <Layout colorProp="blue">
    <div className={styles.indexLayout}>
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
