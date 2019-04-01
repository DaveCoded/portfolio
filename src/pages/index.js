import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SocialBar from "../components/SocialBar/social-bar"

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Layout>
        <SocialBar />
        {/* <Img fluid={this.props.data.background.childImageSharp.fluid} /> */}
      </Layout>
    )
  }

  // Only animate the h1 on first page load

  /* componentDidMount() {
    if (window.sessionStorage.getItem("firstLoadDone") === null) {
      this.setState({
        // Set CSS class?
      })
      window.sessionStorage.setItem("firstLoadDone", 1)
    } else {
      this.setState({
        // eg Remove CSS class
      })
    }
  } */
}

export default HomePage

export const query = graphql`
  query {
    background: file(relativePath: { eq: "home_background.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
