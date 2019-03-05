import React, { Component } from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Layout from "../components/layout"

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
        <h1
          style={{
            borderBottom: "1px solid #ccc",
            paddingBottom: "0.5rem",
          }}
        >
          {title}
        </h1>
        <p>{link}</p>
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

export default Project

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
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
