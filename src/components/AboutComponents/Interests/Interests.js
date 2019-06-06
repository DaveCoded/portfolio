import React from "react"
import Goodreads from "./Goodreads"

import styles from "./Interests.module.scss"

const Interests = () => {
  return (
    <div className={styles.wrapper}>
      <p>
        I'm interested in far too many things, so end up keeping various hobbies
        on an <em>ad hoc</em> rotation. I always have a good book on the go, and
        something beyond my level to learn on the piano.
      </p>
      <p>
        At the moment, other than all the time I dedicate to coding, I am
        starting two podcasts, one with friends and one bizarre solo project
        that may or may not ever be published.
      </p>
      <p>
        Otherwise I'm currently improving my drawing and Illustrator and
        Photoshop skills, and playing chess online.
      </p>
      <div className={styles.contentBox}>
        <Goodreads />
      </div>
    </div>
  )
}

export default Interests
