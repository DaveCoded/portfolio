import React from "react"
import { graphql } from "gatsby"

import styles from "./projects.module.scss"
import Project from "../components/Project/Project"

const ProjectsPage = props => {
  return (
    <main className={styles.main}>
      {props.data.allContentfulProject.edges.map(edge => (
        <Project key={edge.node.id} node={edge.node} />
      ))}
    </main>
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
          description
          tech
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
