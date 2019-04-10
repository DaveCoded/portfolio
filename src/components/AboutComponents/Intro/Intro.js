import React from "react"
import Img from "gatsby-image"
import { graphql, StaticQuery } from "gatsby"

import styles from "./Intro.module.scss"

const Intro = () => (
  <div className={styles.wrapper}>
    <div className={styles.text}>
      <p>
        Hi. Thank you for coming to check out my portfolio. It leverages the
        awesome power of Gatsby, which lets me write React code, while you enjoy
        a blazing fast experience. Finally, the best of both worlds!
      </p>
      <p>
        I'm one of the rare few who is interested both in the traditional,
        presentational aspects of front-end development, as well as the more
        recent JavaScript takeover. As long as it means a wonderful web to use
        and work in, I'll give it a go. I also enjoy tinkering with Adobe
        Illustrator and Photoshop.
      </p>
      <h4>Currently learning about:</h4>
      <p>SVG animations and morphing, Redux, and JavaScript design patterns</p>
    </div>
    <StaticQuery
      query={graphql`
        query {
          profile: file(relativePath: { eq: "profile-pic.jpg" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <div className={styles.image}>
          <Img fluid={data.profile.childImageSharp.fluid} />
          <p>Also, this is my face</p>
        </div>
      )}
    />
  </div>
)

export default Intro
