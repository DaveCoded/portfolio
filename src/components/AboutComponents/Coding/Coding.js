import React from "react"

import styles from "./Coding.module.scss"

const Coding = () => (
  <div className={styles.codingDiv}>
    <h3>An open love letter to coding</h3>
    <p>
      I used to be in publishing. I've always loved books; reading them,
      smelling them, judging them by their covers and decorating my life with
      them. So working with them should have been heaven. Imagine my confusion
      upon finding out it wasn't for me!
    </p>
    <p>
      If you can, then it won't be much of a leap for you to understand my
      relief when I found that coding had everything I'd been missing. For me,
      coding means being able to challenge yourself every day. It means having
      the freedom to soothe my over-active curiosity glands and the comforting
      knowledge that I'll never have to stop learning. More than anything,
      learning to code is an opportunity to contribute meaningfully and
      positively to the lives millions of other people.
    </p>
    <h4 className={styles.heading}>
      I think that's pretty <span>sweet</span>
    </h4>
  </div>
)

export default Coding
