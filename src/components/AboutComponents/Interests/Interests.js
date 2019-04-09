import React from "react"
import Goodreads from "./Goodreads"

import styles from "./Interests.module.scss"

const Interests = props => {
  return (
    <div>
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
        Photoshop skills, playing chess online and learning card tricks.
      </p>
      <div className={styles.contentBox}>
        <Goodreads />
        <div>
          <h3>Currently learning</h3>
          <p>Rachmaninoff's Prelude op. 23 no. 5 in G minor</p>
          <div>
            <iframe
              title="Rachmaninoff prelude op. 23 no. 5 in G minor played by Berezovsky"
              src="https://www.youtube.com/embed/I2GKgFZ_ioQ"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Interests
