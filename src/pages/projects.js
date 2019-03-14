import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import styles from "./projects.module.scss"
import Project from "../components/Project/Project"

const ProjectsPage = props => {
  return (
    <Layout>
      <main className={styles.main}>
        <h1>Projects</h1>
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
      sort: { fields: [createdAt], order: ASC }
    ) {
      edges {
        node {
          id
          title
          slug
          link
          createdAt(formatString: "MMMM DD, YYYY")
          featuredImage {
            fluid(maxWidth: 600) {
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
