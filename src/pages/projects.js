import React from "react"
import { graphql } from "gatsby"

import Link from "gatsby-link"
import Img from "gatsby-image"
import Layout from "../components/layout"
import styles from "./projects.module.scss"

const Project = ({ node }) => {
  return (
    <article
      style={{
        marginBottom: "1.5rem",
        padding: "1.5rem",
        border: "1px solid #ccc",
      }}
    >
      <h3>
        <Link to={`projects/${node.slug}`}>{node.title}</Link>
      </h3>
      <p>{node.link}</p>
      <div>
        <div>
          <Img resolutions={node.featuredImage.resolutions} />
        </div>
        <div>
          <p>{node.content.childMarkdownRemark.excerpt}</p>
        </div>
      </div>
    </article>
  )
}

const ProjectsPage = props => {
  console.log(props)
  return (
    <Layout>
      <main className={styles.main}>
        {props.data.allContentfulProject.edges.map(edge => (
          <Project key={edge.node.id} node={edge.node} />
        ))}
      </main>
    </Layout>
  )
}

export default ProjectsPage

export const pageQuery = graphql`
  query {
    allContentfulProject(
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: [createdAt], order: DESC }
    ) {
      edges {
        node {
          id
          title
          slug
          link
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
