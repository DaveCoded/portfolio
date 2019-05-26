import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const CategoryImage = () => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "Blog-images/developer.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      return <Img fluid={data.image.childImageSharp.fluid} />
    }}
  />
)

export default CategoryImage
