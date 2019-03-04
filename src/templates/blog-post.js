import React, { Component } from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Layout from "../components/layout"

class BlogPost extends Component {
  render() {
    console.log(this.props)
    const {
      title,
      createdAt,
      featuredImage,
      content,
    } = this.props.data.contentfulBlogPost
    return (
      <Layout>
        <h1
          style={{
            borderBottom: "1px solid #ccc",
            paddingBottom: "0.5rem",
          }}
        >
          {title}
        </h1>
        <p>{createdAt}</p>
        <div style={{ width: "60vw" }}>
          <Img sizes={featuredImage.sizes} />
        </div>
        <hr />
        <div
          dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }}
        />
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
