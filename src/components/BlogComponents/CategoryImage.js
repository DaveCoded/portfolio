import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const CategoryImage = props => (
  <StaticQuery
    query={graphql`
      query {
        css: file(relativePath: { eq: "Blog-images/css-logo.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        gatsby: file(relativePath: { eq: "Blog-images/gatsby.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        developer: file(relativePath: { eq: "Blog-images/developer.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        javascript: file(relativePath: { eq: "Blog-images/javascript.jpg" }) {
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
        opinion: file(relativePath: { eq: "Blog-images/opinion.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      let conditionalImage
      if (props.subject === "react") {
        conditionalImage = data.react.childImageSharp.fluid
      } else if (props.subject === "css") {
        conditionalImage = data.css.childImageSharp.fluid
      } else if (props.subject === "javascript") {
        conditionalImage = data.javascript.childImageSharp.fluid
      } else if (props.subject === "gatsby") {
        conditionalImage = data.gatsby.childImageSharp.fluid
      } else if (props.subject === "opinion") {
        conditionalImage = data.opinion.childImageSharp.fluid
      } else {
        conditionalImage = data.developer.childImageSharp.fluid
      }
      return <Img style={{ height: "100%" }} fluid={conditionalImage} />
    }}
  />
)

export default CategoryImage
