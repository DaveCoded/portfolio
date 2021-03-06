import React from "react"

import styles from "./Tech.module.scss"

const Tech = () => (
  <div className={styles.Tech}>
    <h3
      style={{
        marginBottom: "3rem",
        fontSize: "3rem",
        color: "var(--dark-grey)",
        textAlign: "center",
      }}
    >
      Tech I <span style={{ color: "var(--pink)" }}>Love</span>
    </h3>
    <p>
      As a front-end developer, I'm open to anything that delivers a beautiful
      user experience. I've been coding in React a lot recently, and though I am
      enjoying combining logic with presentation in the same file, I'm
      'framework agnostic'. It's all about the outcome, not the tools! That
      said, developing this site on Gatsby has been a joy and I'll be using it
      whenever I can in the future.
    </p>
    <p>
      I believe strongly in learning the foundations well: semantic HTML,
      well-structured CSS and clean JavaScript. My understanding of the latter
      came a long way after reading Kyle Simpson's series, You Don't Know JS,
      which I couldn't recommend enough.
    </p>
  </div>
)

export default Tech
