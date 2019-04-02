import React from "react"
import { graphql } from "gatsby"

import Link from "gatsby-link"
import Img from "gatsby-image"
import Layout from "../components/layout"

const BlogPost = ({ node }) => {
  return (
    <div
      style={{
        marginBottom: "1.5rem",
        padding: "1.5rem",
        border: "1px solid #ccc",
      }}
    >
      <h3>
        <Link to={`blog/${node.slug}`}>{node.title}</Link>
      </h3>
      <p>{node.createdAt}</p>
      <div>
        <div>
          <Img resolutions={node.featuredImage.resolutions} />
        </div>
        <div>{node.content.childMarkdownRemark.excerpt}</div>
      </div>
    </div>
  )
}

const IndexPage = props => {
  console.log(props)
  return (
    <Layout colorProp="blue">
      {props.data.allContentfulBlogPost.edges.map(edge => (
        <BlogPost key={edge.node.id} node={edge.node} />
      ))}
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    allContentfulBlogPost(
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: [createdAt], order: DESC }
    ) {
      edges {
        node {
          id
          title
          slug
          createdAt(formatString: "MMMM DD, YYYY")
          featuredImage {
            resolutions(width: 300) {
              ...GatsbyContentfulResolutions
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
