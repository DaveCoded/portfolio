import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const CategoryImage = props => (
  <StaticQuery
    query={graphql`
      query {
        developer: file(relativePath: { eq: "Blog-images/developer.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        javascript: file(relativePath: { eq: "Blog-images/js-logo.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        react: file(relativePath: { eq: "Blog-images/react-logo.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      let variable
      if (props.subject === "other") {
        variable = data.developer.childImageSharp.fluid
      } else if (props.subject === "javascript") {
        variable = data.javascript.childImageSharp.fluid
      } else {
        variable = data.react.childImageSharp.fluid
      }
      return <Img fluid={variable} />
    }}
  />
)

export default CategoryImage
