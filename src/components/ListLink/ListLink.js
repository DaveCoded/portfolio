import React from "react"
import { Link } from "gatsby"

import styles from "./ListLink.module.scss"

const ListLink = props => (
  <li className={styles.listLink}>
    <Link
      to={props.to}
      activeStyle={{
        borderBottom: "3px solid #1cefef",
        paddingBottom: "5px",
        color: "#e93b74",
      }}
    >
      {props.children}
    </Link>
  </li>
)

export default ListLink
